/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let f_1 = 1, f_2 = 1;
    for (let floor = 2; floor <= n; floor++) {
        const next = f_1 + f_2;
        f_2 = f_1;
        f_1 = next;
    }
    return f_1;
};

// console.log(climbStairs(2), climbStairs(2) === 2);
console.log(climbStairs(3), climbStairs(3) === 3);
