/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // dp[i]表示到达第i个台阶的最小花费
    const dp = [0, 0];
    let sum = 0;
    const min = (a, b) => (a > b ? b : a);
    cost.forEach(num => { sum += num; });
    for (let i = 2; i < cost.length; i++) {
        dp[i] = sum + 1;
    }
    const step = [1, 2];
    for (let floor = 0; floor < cost.length; floor++) {
        for (let s = 0; s < step.length; s++) {
            if (floor + step[s] < cost.length) {
                dp[floor + step[s]] = min(dp[floor + step[s]], dp[floor] + cost[floor]);
            }
        }
    }
    return min(dp[dp.length - 1] + cost[cost.length - 1], dp[dp.length - 2] + cost[cost.length - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
