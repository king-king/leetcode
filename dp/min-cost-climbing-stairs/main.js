/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // dp[i]表示到达第i个台阶的最小花费
    // 0 1
    let last2 = 0, last1 = 0;
    for (let floor = 2; floor <= cost.length; floor++) {
        const next = Math.min(last2 + cost[floor - 2], last1 + cost[floor - 1]);
        last2 = last1;
        last1 = next;
    }
    return last1;
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
