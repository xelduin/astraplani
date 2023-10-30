use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::{ContractAddress, ClassHash};

enum CelestialClass {
    Star: (),
    Nebula: ()
}

#[starknet::interface]
trait IOrbitFlux<TContractState> {
    fn enter_orbit(self: @TContractState, entity_id: u128, parent_id: u128,) -> ();
    fn exit_orbit(self: @TContractState, entity_id: u128,) -> ();
}

#[dojo::contract]
mod orbit_flux {
    use starknet::{ContractAddress, get_caller_address};
    use super::IOrbitFlux;
    use astraplani::models::mass::{Mass};
    use astraplani::models::orbit::{Orbit, OrbitMass};
    use astraplani::models::elemental_distribution::{
        ElementalAccretion, ElementalDispersion, ElementalEmission
    };

    use debug::PrintTrait;

    #[external(v0)]
    impl OrbitFluxImpl of IOrbitFlux<ContractState> {
        fn enter_orbit(self: @ContractState, entity_id: u128, parent_id: u128,) -> () {
            let world = self.world_dispatcher.read();

            InternalOrbitFluxImpl::update(world, parent_id);

            let entity_mass = get!(world, entity_id, Mass);
            let parent_orbit_mass = get!(world, parent_id, OrbitMass);
            let elemental_dispersion = get!(world, parent_id, ElementalDispersion);

            let new_orbit_mass = parent_orbit_mass.mass + entity_mass.mass;

            set!(
                world,
                (
                    OrbitMass { entity_id: parent_id, mass: new_orbit_mass, },
                    ElementalAccretion { entity_id, total_accretion: elemental_dispersion.ARPS, }
                )
            )
        }

        fn exit_orbit(self: @ContractState, entity_id: u128,) -> () {
            let world = self.world_dispatcher.read();
            let orbit = get!(world, entity_id, Orbit);
            let parent_id = orbit.parent_id;

            InternalOrbitFluxImpl::update(world, parent_id);

            let entity_mass = get!(world, entity_id, Mass);
            let parent_orbit_mass = get!(world, parent_id, OrbitMass);

            let new_orbit_mass = parent_orbit_mass.mass - entity_mass.mass;

            set!(world, (OrbitMass { entity_id: parent_id, mass: new_orbit_mass, },))
        }
    }

    #[generate_trait]
    impl InternalOrbitFluxImpl of InternalOrbitFluxTrait {
        fn update(world: IWorldDispatcher, entity_id: u128) -> () {
            let orbit_mass = get!(world, entity_id, OrbitMass);
            if orbit_mass.mass == 0 {
                return;
            }

            let ts = starknet::get_block_timestamp();
            let elemental_dispersion = get!(world, entity_id, ElementalDispersion);

            let time_factor = ts - elemental_dispersion.lastUpdateTimestamp;
            let ARPS_change = 100000 / orbit_mass.mass * time_factor.into();

            let new_ARPS = elemental_dispersion.ARPS + ARPS_change;

            set!(
                world, (ElementalDispersion { entity_id, ARPS: new_ARPS, lastUpdateTimestamp: ts, })
            )
        }
    }
}

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;
    use debug::PrintTrait;


    // import world dispatcher
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use astraplani::models::mass::{mass, Mass};
    use astraplani::models::orbit::{orbit, Orbit};
    use astraplani::models::elemental_distribution::{
        //elemental_emission, ElementalEmission,
        elemental_accretion, ElementalAccretion, elemental_dispersion, ElementalDispersion
    };

    // import test utils
    use dojo::test_utils::{spawn_test_world, deploy_contract};

    // import formation sys
    use astraplani::systems::celestial_formation::{
        celestial_formation, ICelestialFormationDispatcher, ICelestialFormationDispatcherTrait
    };
    use super::{orbit_flux, IOrbitFluxDispatcher, IOrbitFluxDispatcherTrait};


    #[test]
    #[available_gas(90000000)]
    fn test_enter_orbit() {
        // caller
        let caller = starknet::contract_address_const::<0x0>();

        // models
        let mut models = array![
            mass::TEST_CLASS_HASH,
            orbit::TEST_CLASS_HASH,
            elemental_accretion::TEST_CLASS_HASH,
            elemental_dispersion::TEST_CLASS_HASH
        ];

        // deploy world with models
        let world = spawn_test_world(models);

        // deploy systems contract
        let celestial_contract_address = world
            .deploy_contract('salt', celestial_formation::TEST_CLASS_HASH.try_into().unwrap());
        let celestial_formation_system = ICelestialFormationDispatcher {
            contract_address: celestial_contract_address
        };

        let orbit_flux_address = world
            .deploy_contract('salt', orbit_flux::TEST_CLASS_HASH.try_into().unwrap());
        let orbit_flux_system = IOrbitFluxDispatcher { contract_address: orbit_flux_address };

        // call spawn()
        let nebula_id = celestial_formation_system.form_nebula();
        let star_id = celestial_formation_system.form_star();

        // Check world state
        let nebula_mass = get!(world, nebula_id, Mass);
        let orbit = get!(world, star_id, Orbit);

        // call deposit
        orbit_flux_system.enter_orbit(star_id, nebula_id);

        // get elemental models
        let nebula_dispersion = get!(world, nebula_id, ElementalDispersion);
        let star_accretion = get!(world, star_id, ElementalAccretion);

        // check models
        let nebula_mass = get!(world, nebula_id, Mass);
        assert(nebula_dispersion.ARPS == 0, 'ARPS is wrong is');
        assert(star_accretion.total_accretion == 0, 'total_accretion is wrong');

        // fast forward
        starknet::testing::set_block_timestamp(100000);

        // now we need to update the elemental dispersion
        let star2_id = celestial_formation_system.form_star();
        orbit_flux_system.enter_orbit(star2_id, nebula_id);

        let nebula_mass = get!(world, nebula_id, Mass);

        let nebula_dispersion = get!(world, nebula_id, ElementalDispersion);
        assert(nebula_dispersion.ARPS != 0, 'ARPS is zero');
    }
}
