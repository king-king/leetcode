/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    let f_1 = 1, f_2 = 1;
    for (let floor = 2; floor <= n; floor++) {
        const next = (f_1 + f_2) % 1000000007;
        f_2 = f_1;
        f_1 = next;
    }
    return f_1;
};

console.log(numWays(7), numWays(7) === 21);
