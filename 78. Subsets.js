/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 参考 https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
    const res = []

    // 逐个考察数字，每个数都选或不选。等到递归结束时，把集合加入解集。
    // const h = (index, list) => {
    //     if(index === nums.length) {
    //         res.push(list.slice())
    //         return
    //     }
    //     list.push(nums[index])
    //     h(index + 1, list)
    //     list.pop()
    //     h(index + 1, list)
    // }
    // h(0, [])
    // return res    

    // 在执行子递归之前，加入解集，即，在递归压栈前 “做事情”。
    const h = (index, list) => {
        res.push(list.slice())
        for(let i = index, len = nums.length; i < len; i++) {
            list.push(nums[i])
            h(i + 1, list)
            list.pop()
        }
    }
    h(0, [])
    return res

};