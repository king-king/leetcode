/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let front = 0, back = nums.length - 1;
    // 首先从后往前，找到第一个不是val的值
    for (;back >= -1; back--) {
        if (nums[back] !== val) {
            break;
        }
    }
    if (back === -1) {
        // 最特殊的情况，都是val
        return 0;
    }
    if (front === back) {
        return 1;
    }
    for (;front <= back; front++) {
        if (nums[front] === val) {
            const temp = nums[back];
            nums[back] = nums[front];
            nums[front] = temp;
            for (;back >= front; back--) {
                if (nums[back] !== val) {
                    break;
                }
            }
        }
    }
    return front;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) === 5);
console.log(removeElement([4, 5], 5), removeElement([4, 5], 5) === 1);
