#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct Anima {
    #[key]
    entity_id: u128,
    anima_id: u128,
}
