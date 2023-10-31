#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct ElementalAttributes {
    #[key]
    entity_id: u128,
    fire: u128,
    water: u128,
    air: u128,
    earth: u128,
}
