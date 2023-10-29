import { useDojo } from './DojoContext';
import { Direction, } from './dojo/createSystemCalls'
import { useComponentValue } from "@latticexyz/react";
import { Entity, HasValue } from '@latticexyz/recs';
import { useEffect } from 'react';
import { setComponentsFromGraphQLEntities } from '@dojoengine/utils';
import { useEntityQuery } from '@dojoengine/react';

function App() {
  const {
    setup: {
      systemCalls: { create_star, enter_orbit },
      components : {Owner, Mass},
      network: { graphSdk, contractComponents }
    },
    account: { create, list, select, account, isDeploying }
  } = useDojo();

  // extract query
  const { getEntities } = graphSdk()

  // entity id - this example uses the account address as the entity id
  const playerAddress = account.address.toString();

  const ownedEntities = useEntityQuery([
    HasValue(Owner, {owner: BigInt(playerAddress)})
  ]);

  useEffect(() => {
    console.info("ownedEntities", ownedEntities)
    console.info("playerAddress", playerAddress)
  }, [ownedEntities]);

  // use graphql to current state data
  useEffect(() => {
    if (!playerAddress) return;

    const fetchData = async () => {
      try {
        const { data } = await getEntities();
        if (data && data.entities) {
          setComponentsFromGraphQLEntities(contractComponents, data.entities.edges);
        }
        console.info("Data fetched:", data )
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [playerAddress, contractComponents]);


  return (
    <>
      <button onClick={create}>{isDeploying ? "deploying burner" : "create burner"}</button>
      <div className="card">
        select signer:{" "}
        <select onChange={e => select(e.target.value)}>
          {list().map((account, index) => {
            return <option value={account.address} key={index}>{account.address}</option>
          })}i
        </select>
      </div>
      <div className="card">
        <button onClick={() => create_star(account)}>Spawn</button>
        <div>Stars: {ownedEntities ? `${ownedEntities.length}` : 'Need to Spawn'}</div>
      </div>
    </>
  );
}

export default App;
