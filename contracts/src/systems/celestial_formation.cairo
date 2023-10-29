use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::{ContractAddress, ClassHash};

enum CelestialClass {
    Star: (),
    Nebula: ()
}

#[starknet::interface]
trait ICelestialFormation<TContractState> {
    fn form_star(self: @TContractState,) -> u128;
    fn form_nebula(self: @TContractState,) -> u128;
}

#[dojo::contract]
mod celestial_formation {
    use starknet::{ContractAddress, get_caller_address, get_block_timestamp};
    use super::{ICelestialFormation, CelestialClass};
    use dojo_examples::models::elemental_distribution::{ElementalEmission, ElementalDispersion};
    use dojo_examples::models::mass::{Mass};
    use dojo_examples::models::owner::{Owner};

    #[external(v0)]
    impl CelestialFormationImpl of ICelestialFormation<ContractState> {
        fn form_star(self: @ContractState) -> u128 {
            let world = self.world_dispatcher.read();

            let owner = get_caller_address();

            let entity_id: u128 = world.uuid().into();

            let mass = 100;

            set!(world, (Mass { entity_id, mass }, Owner { entity_id, owner, },));

            return entity_id.into();
        }

        fn form_nebula(self: @ContractState,) -> u128 {
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
    use dojo_examples::models::mass::{mass, Mass};
    use dojo_examples::models::owner::{owner, Owner};
    use dojo_examples::models::elemental_distribution::{
        elemental_emission, ElementalEmission, elemental_dispersion, ElementalDispersion
    };

    // import test utils
    use dojo::test_utils::{spawn_test_world, deploy_contract};

    // import formation sys
    use super::{
        celestial_formation, ICelestialFormationDispatcher, ICelestialFormationDispatcherTrait
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

        // call form star
        let star_id = celestial_formation_system.form_star();

        // Check world state
        let mass = get!(world, star_id, Mass);
        let owner = get!(world, star_id, Owner);

        // check models
        assert(mass.mass == 100, 'mass is wrong');
        assert(owner.owner == caller, 'owner is wrong');
    }
}
