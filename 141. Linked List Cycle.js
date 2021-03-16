/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 法一
    // try{
    //     JSON.stringify(head)
    //     return false
    // }catch{
    //    return true 
    // } 

    // 法二
    let map = new Map()
    while(head){
        if(map.has(head)) return true
        map.set(head,true)
        head = head.next
    }
    return false
};