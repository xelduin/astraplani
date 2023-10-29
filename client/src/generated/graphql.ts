import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u64: { input: any; output: any; }
  u128: { input: any; output: any; }
};

export type ElementalAccretion = {
  __typename?: 'ElementalAccretion';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  total_accretion?: Maybe<Scalars['u128']['output']>;
};

export type ElementalAccretionConnection = {
  __typename?: 'ElementalAccretionConnection';
  edges?: Maybe<Array<Maybe<ElementalAccretionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ElementalAccretionEdge = {
  __typename?: 'ElementalAccretionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ElementalAccretion>;
};

export type ElementalAccretionOrder = {
  direction: OrderDirection;
  field: ElementalAccretionOrderField;
};

export enum ElementalAccretionOrderField {
  EntityId = 'ENTITY_ID',
  TotalAccretion = 'TOTAL_ACCRETION'
}

export type ElementalAccretionWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  total_accretion?: InputMaybe<Scalars['u128']['input']>;
  total_accretionEQ?: InputMaybe<Scalars['u128']['input']>;
  total_accretionGT?: InputMaybe<Scalars['u128']['input']>;
  total_accretionGTE?: InputMaybe<Scalars['u128']['input']>;
  total_accretionLT?: InputMaybe<Scalars['u128']['input']>;
  total_accretionLTE?: InputMaybe<Scalars['u128']['input']>;
  total_accretionNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type ElementalDispersion = {
  __typename?: 'ElementalDispersion';
  ARPS?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  lastUpdateTimestamp?: Maybe<Scalars['u64']['output']>;
};

export type ElementalDispersionConnection = {
  __typename?: 'ElementalDispersionConnection';
  edges?: Maybe<Array<Maybe<ElementalDispersionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ElementalDispersionEdge = {
  __typename?: 'ElementalDispersionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ElementalDispersion>;
};

export type ElementalDispersionOrder = {
  direction: OrderDirection;
  field: ElementalDispersionOrderField;
};

export enum ElementalDispersionOrderField {
  Arps = 'ARPS',
  EntityId = 'ENTITY_ID',
  Lastupdatetimestamp = 'LASTUPDATETIMESTAMP'
}

export type ElementalDispersionWhereInput = {
  ARPS?: InputMaybe<Scalars['u128']['input']>;
  ARPSEQ?: InputMaybe<Scalars['u128']['input']>;
  ARPSGT?: InputMaybe<Scalars['u128']['input']>;
  ARPSGTE?: InputMaybe<Scalars['u128']['input']>;
  ARPSLT?: InputMaybe<Scalars['u128']['input']>;
  ARPSLTE?: InputMaybe<Scalars['u128']['input']>;
  ARPSNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  lastUpdateTimestamp?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampEQ?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampGT?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampGTE?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampLT?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampLTE?: InputMaybe<Scalars['u64']['input']>;
  lastUpdateTimestampNEQ?: InputMaybe<Scalars['u64']['input']>;
};

export type ElementalEmission = {
  __typename?: 'ElementalEmission';
  daily_emission?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
};

export type ElementalEmissionConnection = {
  __typename?: 'ElementalEmissionConnection';
  edges?: Maybe<Array<Maybe<ElementalEmissionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ElementalEmissionEdge = {
  __typename?: 'ElementalEmissionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<ElementalEmission>;
};

export type ElementalEmissionOrder = {
  direction: OrderDirection;
  field: ElementalEmissionOrderField;
};

export enum ElementalEmissionOrderField {
  DailyEmission = 'DAILY_EMISSION',
  EntityId = 'ENTITY_ID'
}

export type ElementalEmissionWhereInput = {
  daily_emission?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionEQ?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionGT?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionGTE?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionLT?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionLTE?: InputMaybe<Scalars['u128']['input']>;
  daily_emissionNEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Event>;
};

export type Mass = {
  __typename?: 'Mass';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  mass?: Maybe<Scalars['u128']['output']>;
};

export type MassConnection = {
  __typename?: 'MassConnection';
  edges?: Maybe<Array<Maybe<MassEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MassEdge = {
  __typename?: 'MassEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mass>;
};

export type MassOrder = {
  direction: OrderDirection;
  field: MassOrderField;
};

export enum MassOrderField {
  EntityId = 'ENTITY_ID',
  Mass = 'MASS'
}

export type MassWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  mass?: InputMaybe<Scalars['u128']['input']>;
  massEQ?: InputMaybe<Scalars['u128']['input']>;
  massGT?: InputMaybe<Scalars['u128']['input']>;
  massGTE?: InputMaybe<Scalars['u128']['input']>;
  massLT?: InputMaybe<Scalars['u128']['input']>;
  massLTE?: InputMaybe<Scalars['u128']['input']>;
  massNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Model>;
};

export type ModelUnion = ElementalAccretion | ElementalDispersion | ElementalEmission | Mass | Orbit | OrbitMass | Owner;

export type Orbit = {
  __typename?: 'Orbit';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  parent_id?: Maybe<Scalars['u128']['output']>;
};

export type OrbitConnection = {
  __typename?: 'OrbitConnection';
  edges?: Maybe<Array<Maybe<OrbitEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OrbitEdge = {
  __typename?: 'OrbitEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Orbit>;
};

export type OrbitMass = {
  __typename?: 'OrbitMass';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  mass?: Maybe<Scalars['u128']['output']>;
};

export type OrbitMassConnection = {
  __typename?: 'OrbitMassConnection';
  edges?: Maybe<Array<Maybe<OrbitMassEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OrbitMassEdge = {
  __typename?: 'OrbitMassEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<OrbitMass>;
};

export type OrbitMassOrder = {
  direction: OrderDirection;
  field: OrbitMassOrderField;
};

export enum OrbitMassOrderField {
  EntityId = 'ENTITY_ID',
  Mass = 'MASS'
}

export type OrbitMassWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  mass?: InputMaybe<Scalars['u128']['input']>;
  massEQ?: InputMaybe<Scalars['u128']['input']>;
  massGT?: InputMaybe<Scalars['u128']['input']>;
  massGTE?: InputMaybe<Scalars['u128']['input']>;
  massLT?: InputMaybe<Scalars['u128']['input']>;
  massLTE?: InputMaybe<Scalars['u128']['input']>;
  massNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type OrbitOrder = {
  direction: OrderDirection;
  field: OrbitOrderField;
};

export enum OrbitOrderField {
  EntityId = 'ENTITY_ID',
  ParentId = 'PARENT_ID'
}

export type OrbitWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  parent_id?: InputMaybe<Scalars['u128']['input']>;
  parent_idEQ?: InputMaybe<Scalars['u128']['input']>;
  parent_idGT?: InputMaybe<Scalars['u128']['input']>;
  parent_idGTE?: InputMaybe<Scalars['u128']['input']>;
  parent_idLT?: InputMaybe<Scalars['u128']['input']>;
  parent_idLTE?: InputMaybe<Scalars['u128']['input']>;
  parent_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Owner = {
  __typename?: 'Owner';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u128']['output']>;
  owner?: Maybe<Scalars['ContractAddress']['output']>;
};

export type OwnerConnection = {
  __typename?: 'OwnerConnection';
  edges?: Maybe<Array<Maybe<OwnerEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type OwnerEdge = {
  __typename?: 'OwnerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Owner>;
};

export type OwnerOrder = {
  direction: OrderDirection;
  field: OwnerOrderField;
};

export enum OwnerOrderField {
  EntityId = 'ENTITY_ID',
  Owner = 'OWNER'
}

export type OwnerWhereInput = {
  entity_id?: InputMaybe<Scalars['u128']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u128']['input']>;
  entity_idGT?: InputMaybe<Scalars['u128']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idLT?: InputMaybe<Scalars['u128']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u128']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  owner?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Query = {
  __typename?: 'Query';
  elementalaccretionModels?: Maybe<ElementalAccretionConnection>;
  elementaldispersionModels?: Maybe<ElementalDispersionConnection>;
  elementalemissionModels?: Maybe<ElementalEmissionConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  events?: Maybe<EventConnection>;
  massModels?: Maybe<MassConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  orbitModels?: Maybe<OrbitConnection>;
  orbitmassModels?: Maybe<OrbitMassConnection>;
  ownerModels?: Maybe<OwnerConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryElementalaccretionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ElementalAccretionOrder>;
  where?: InputMaybe<ElementalAccretionWhereInput>;
};


export type QueryElementaldispersionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ElementalDispersionOrder>;
  where?: InputMaybe<ElementalDispersionWhereInput>;
};


export type QueryElementalemissionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ElementalEmissionOrder>;
  where?: InputMaybe<ElementalEmissionWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMassModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MassOrder>;
  where?: InputMaybe<MassWhereInput>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrbitModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrbitOrder>;
  where?: InputMaybe<OrbitWhereInput>;
};


export type QueryOrbitmassModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrbitMassOrder>;
  where?: InputMaybe<OrbitMassWhereInput>;
};


export type QueryOwnerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OwnerOrder>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  system_id?: Maybe<Scalars['ID']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<System>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'ElementalAccretion' } | { __typename: 'ElementalDispersion' } | { __typename: 'ElementalEmission' } | { __typename: 'Mass', mass?: any | null } | { __typename: 'Orbit', parent_id?: any | null } | { __typename: 'OrbitMass' } | { __typename: 'Owner', owner?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Mass {
            mass
          }
          ... on Owner {
            owner
          }
          ... on Orbit {
            parent_id
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;