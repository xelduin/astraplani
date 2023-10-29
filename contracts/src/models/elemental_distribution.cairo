#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct ElementalEmission {
    #[key]
    entity_id: u128,
    daily_emission: u128,
}

#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct ElementalDispersion {
    #[key]
    entity_id: u128,
    ARPS: u128,
    lastUpdateTimestamp: u64
}

#[derive(Model, PartialEq, Copy, Drop, Serde)]
struct ElementalAccretion {
    #[key]
    entity_id: u128,
    total_accretion: u128,
}
