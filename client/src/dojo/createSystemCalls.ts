import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { EntityIndex, getComponentValue } from "@latticexyz/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { updatePositionWithDirection } from "../utils";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, contractComponents }: SetupNetworkResult,
    { Owner, Mass, Orbit }: ClientComponents
) {

    const create_star = async (signer: Account) => {

        const ownerAddress = signer.address.toString() as EntityIndex;
        const entityId = uuid();

        const ownerId = uuid();
        Owner.addOverride(ownerId, {
            entity_id: entityId,
            owner: ownerAddress
        });

        const massId = uuid();
        Mass.addOverride(massId, {
            entity_id: entityId,
            value: 100,
        });


        try {
            const tx = await execute(signer, "celestial_formation", 'form_star', []);
            setComponentsFromEvents(contractComponents,
                getEvents(
                    await signer.waitForTransaction(tx.transaction_hash,
                        { retryInterval: 100 }
                    )
                )
            );

        } catch (e) {
            console.log(e)
            Owner.removeOverride(ownerId);
            Mass.removeOverride(massId);
        } finally {
            Owner.removeOverride(ownerId);
            Mass.removeOverride(massId);
        }
    };

    const enter_orbit = async (signer: Account, starId: EntityIndex, nebulaId: EntityIndex) => {

        const orbitId = uuid();
        Orbit.addOverride(orbitId, {
            entity_id: starId,
            parent_id: nebulaId,
        });

        try {
            const tx = await execute(signer, "orbit_flux", "enter_orbit", [starId, nebulaId]);
            setComponentsFromEvents(contractComponents,
                getEvents(
                    await signer.waitForTransaction(tx.transaction_hash,
                        { retryInterval: 100 }
                    )
                )
            );

        } catch (e) {
            console.log(e)
            Orbit.removeOverride(orbitId);
        } finally {
            Orbit.removeOverride(orbitId);
        }

    };

    return {
        create_star,
        enter_orbit
    };
}

export enum Direction {
    Left = 1,
    Right = 2,
    Up = 3,
    Down = 4,
}
