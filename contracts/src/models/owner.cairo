use starknet::ContractAddress;

#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct Owner {
    #[key]
    entity_id: u128,
    owner: ContractAddress,
}
