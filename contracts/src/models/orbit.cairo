#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct Orbit {
    #[key]
    entity_id: u128,
    parent_id: u128
}

#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct OrbitMass {
    #[key]
    entity_id: u128,
    mass: u128
}
