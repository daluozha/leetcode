/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 另一种解法：前k个和后k个分别倒置，然后整体倒置
    while(k > 0) (nums.unshift(nums.pop()), k--)
};