import { overridableComponent } from "@latticexyz/recs";
import { SetupNetworkResult } from "./setupNetwork";


export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({ contractComponents }: SetupNetworkResult) {
    return {
        ...contractComponents,
        Owner: overridableComponent(contractComponents.Owner),
        Orbit: overridableComponent(contractComponents.Orbit),
        Mass: overridableComponent(contractComponents.Mass),
    };
}