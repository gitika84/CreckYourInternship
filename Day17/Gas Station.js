function canCompleteCircuit(gas, cost) {
    const n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let startIndex = 0;

    // Iterate through the gas stations
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        // If the tank goes below zero, reset the start index and tank
        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;
        }
    }

    // If total gas is less than total cost, it's impossible to complete the circuit
    return totalGas >= totalCost ? startIndex : -1;
}

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); // Output: 3
