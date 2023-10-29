#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct Mass {
    #[key]
    entity_id: u128,
    mass: u128,
}
