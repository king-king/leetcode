/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
    if (n === 1) {
        return 1;
    } if (n === 2) {
        return 2;
    } if (n === 3) {
        return 4;
    }
    let f_1 = 4, f_2 = 2, f_3 = 1;
    for (let floor = 4; floor <= n; floor++) {
        const next = (f_1 + f_2 + f_3) % 1000000007;
        f_3 = f_2;
        f_2 = f_1;
        f_1 = next;
    }
    return f_1;
};

console.log(waysToStep(5), waysToStep(5) === 13);
