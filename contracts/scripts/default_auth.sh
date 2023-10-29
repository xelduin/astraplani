#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export RPC_URL="http://localhost:5050";

export SOZO_WORLD=$(cat ./target/dev/manifest.json | jq -r '.world.address')

export CELESTIAL_FORMATION=$(cat ./target/dev/manifest.json | jq -r '.contracts[] | select(.name == "celestial_formation" ).address')
export ORBIT_FLUX=$(cat ./target/dev/manifest.json | jq -r '.contracts[] | select(.name == "orbit_flux" ).address')

# enable system -> component authorizations

commands=(
)

# Read the System to Components JSON file
system_models_json=$(cat ./scripts/system_models.json)

echo "looping through system models json"

# Loop through each system
for system in $(echo $system_models_json | jq -r 'keys[]'); do
    # Loop through each component that the system writes to
    for model in $(echo $system_models_json | jq -r ".$system[]"); do
        system_var="${system}"
        contract_address="${!system_var}"
        # make the system a writer of the component
        commands+=("sozo auth writer --world "$SOZO_WORLD" $model $contract_address")
        echo "added model"
    done
done

delay=0

for cmd in "${commands[@]}"; do
    echo "Executing command: $cmd"
    output=$(eval "$cmd")
    echo "Output:"
    echo "$output"
    echo "--------------------------------------"

    if [ $(echo "$delay > 0" | bc -l) -eq 1 ]; then
        echo "Sleeping for $delay seconds..."
        sleep $delay
    fi
done