/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 法一
    // let map = {}
    // return n < 2 ? n : map[n] ? map[n] : map[n] = fib(n-1) + fib(n-2)

    // 法二
    let dp=new Array(n+1).fill(0)
    dp[1]=1
    for(let i=2;i<n+1;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};