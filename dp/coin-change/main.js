/*
 * Created by king at 2022-7-30 12:09:51
 * Copyright (c) 2022
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[mount]表示金额mount所需要的硬币数
    const min = (a, b) => {
        return a > b ? b : a;
    };
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
    }
    for (let n = 1; n <= amount; n++) {
        // 金额从低到高，从1开始
        for (let c = 0; c < coins.length; c++) {
            // 遍历每个硬币
            if (coins[c] <= n) {
                // 如果硬币的金额比要拼凑的还大，则不做运算
                dp[n] = min(dp[n], dp[n - coins[c]] + 1);
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([3, 5, 7], 10));
