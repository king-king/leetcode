/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let result = 0;
    const up = step => {
        if (step === n) {
            result++;
        } else if (step + 1 <= n) {
            up(step + 1);
        } else if (step + 2 <= n) {
            up(step + 2);
        }
    };
    up(n);
    return result;
};

console.log(climbStairs(2), climbStairs(2) === 2);
console.log(climbStairs(3), climbStairs(3) === 3);
