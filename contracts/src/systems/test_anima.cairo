use starknet::ContractAddress;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

#[starknet::interface]
trait ITestAnima<TContractState> {
    fn create(
        self: @TContractState,
        owner: ContractAddress,
        anima_id: u128,
        fire: u128,
        water: u128,
        air: u128,
        earth: u128,
    ) -> u128;
}

#[dojo::contract]
mod test_anima {
    use starknet::ContractAddress;
    use astraplani::models::owner::{Owner};
    use astraplani::models::anima::{Anima};
    use astraplani::models::attributes::{ElementalAttributes};
    use super::ITestAnima;

    #[external(v0)]
    impl TestAnimaImpl of ITestAnima<ContractState> {
        fn create(
            self: @ContractState,
            owner: ContractAddress,
            anima_id: u128,
            fire: u128,
            water: u128,
            air: u128,
            earth: u128,
        ) -> u128 {
            let world = self.world_dispatcher.read();
            let entity_id = world.uuid();

            set!(
                world,
                (
                    Owner { entity_id: entity_id.into(), owner },
                    ElementalAttributes { entity_id: entity_id.into(), fire, water, air, earth },
                    Anima { entity_id: entity_id.into(), anima_id }
                )
            );
            entity_id.into()
        }
    }
}
