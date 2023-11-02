use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::{ContractAddress, ClassHash};

enum CelestialClass {
    Star: (),
    Nebula: ()
}

#[starknet::interface]
trait ICelestialFormation<TContractState> {
    fn form_star(self: @TContractState, anima_id: u128) -> u128;
    fn form_nebula(self: @TContractState,) -> u128;
}

#[dojo::contract]
mod celestial_formation {
    use starknet::{ContractAddress, get_caller_address, get_block_timestamp};
    use super::{ICelestialFormation, CelestialClass};
    use astraplani::models::elemental_distribution::{ElementalEmission, ElementalDispersion};
    use astraplani::models::mass::{Mass};
    use astraplani::models::owner::{Owner};
    use astraplani::models::anima::{Anima};
    use astraplani::models::attributes::{ElementalAttributes};

    #[external(v0)]
    impl CelestialFormationImpl of ICelestialFormation<ContractState> {
        fn form_star(self: @ContractState, anima_id: u128) -> u128 {
            let world = self.world_dispatcher.read();

            let owner = get_caller_address();

            let (anima, anima_owner, elemental_attributes) = get!(
                world, anima_id, (Anima, Owner, ElementalAttributes)
            );
            assert(owner == anima_owner.owner, 'not the owner of the anima');

            let anima = get!(world, anima_id, Anima);

            let entity_id: u128 = world.uuid().into();

            let mass = 100;

            set!(
                world,
                (
                    Mass { entity_id, mass },
                    Owner { entity_id, owner, },
                    ElementalAttributes {
                        entity_id,
                        fire: elemental_attributes.fire,
                        water: elemental_attributes.water,
                        earth: elemental_attributes.earth,
                        air: elemental_attributes.air,
                    },
                )
            );

            return entity_id.into();
        }

        fn form_nebula(self: @ContractState) -> u128 {
            let world = self.world_dispatcher.read();

            let entity_id: u128 = world.uuid().into();

            let mass = 100;

            let current_timestamp = get_block_timestamp();

            set!(
                world,
                (
                    Mass { entity_id, mass },
                    ElementalEmission { entity_id, daily_emission: mass, },
                    ElementalDispersion { entity_id, ARPS: 0, lastUpdateTimestamp: 0, },
                )
            );

            return entity_id.into();
        }
    }
}

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;

    // import world dispatcher
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use astraplani::models::mass::{mass, Mass};
    use astraplani::models::owner::{owner, Owner};
    use astraplani::models::elemental_distribution::{
        elemental_emission, ElementalEmission, elemental_dispersion, ElementalDispersion
    };

    // import test utils
    use dojo::test_utils::{spawn_test_world, deploy_contract};

    // import formation sys
    use super::{
        celestial_formation, ICelestialFormationDispatcher, ICelestialFormationDispatcherTrait
    };
    use astraplani::systems::test_anima::{
        test_anima, ITestAnimaDispatcher, ITestAnimaDispatcherTrait
    };

    #[test]
    #[available_gas(30000000)]
    fn test_star_form() {
        let caller = starknet::contract_address_const::<0x0>();

        // models
        let mut models = array![mass::TEST_CLASS_HASH, owner::TEST_CLASS_HASH];

        // deploy world with models
        let world = spawn_test_world(models);

        // deploy contract
        let contract_address = world
            .deploy_contract('salt', celestial_formation::TEST_CLASS_HASH.try_into().unwrap());
        let celestial_formation_system = ICelestialFormationDispatcher { contract_address };
        let test_anima_contract = world
            .deploy_contract('salt', test_anima::TEST_CLASS_HASH.try_into().unwrap());
        let test_anima_system = ITestAnimaDispatcher { contract_address: test_anima_contract };

        // form anima and get id
        let anima_id = test_anima_system.create(caller, 1, 50, 50, 50, 50);

        // call form star
        let star_id = celestial_formation_system.form_star(anima_id);

        // Check world state
        let mass = get!(world, star_id, Mass);
        let owner = get!(world, star_id, Owner);

        // check models
        assert(mass.mass == 100, 'mass is wrong');
        assert(owner.owner == caller, 'owner is wrong');
    }
}
