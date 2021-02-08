/**
 * tag:动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // dp[i]的含义为表示爬到第i级台阶的方案数
    let dp=new Array(n+1).fill(0)
    dp[0]=1,dp[1]=1,dp[2]=2
    for(let i=3;i<n+1;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};