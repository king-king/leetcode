/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = [1, 1];
    for (let floor = 2; floor <= n; floor++) {
        dp[floor] = dp[floor - 1] + dp[floor - 2];
    }
    return dp[dp.length - 1];
};

// console.log(climbStairs(2), climbStairs(2) === 2);
console.log(climbStairs(3), climbStairs(3) === 3);
