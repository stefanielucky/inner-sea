/*
 * @Author: your name
 * @Date: 2022-04-27 14:54:24
 * @LastEditTime: 2022-04-27 15:04:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /practice/labuladong/NO.1/合并两个有序链表.js
 */

var mergeTwoLists = function(list1, list2) {
    const prehead = new ListNode(-1);
    let prev = prehead

    while(list1 != null && list2 != null){
        if(list1.val <= list2.val){
            prev.next = list1
            list1 = list1.next
        }else{
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }

    prev.next = list1 === null ? list2 : list1
    return prehead.next
};
