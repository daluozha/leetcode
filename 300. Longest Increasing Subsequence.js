/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 法一：动态规划
    // dp[i] 以nums[i]结尾的子序列最大长度
    let len = nums.length
    if(len === 1) return 1
    let dp = new Array(len).fill(1),max = 1
    for(let i = 1;i < len;i++){
        for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
        max = Math.max(max,dp[i])
    }
    return max

    // todo 贪心+二分
};