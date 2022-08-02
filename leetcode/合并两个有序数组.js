/*
 * @Author: your name
 * @Date: 2021-06-04 12:36:13
 * @LastEditTime: 2022-04-18 16:45:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /practice/leetcode/88-合并两个有序数组.js
 */
// 合并两个有序数组
// 返回合并后的数组

// var merge = function(num1, m, num2, n){
//     let insertIndex = 0;
//     for(let i = 0; i < num1.length-m; i++){
//         if(i == num1.length - 1 - m){
//             if(insertIndex < n-1){
//                 let insertNum = n-insertIndex;
//                 num1.splice(num1.length-insertNum, insertNum);
//                 num1.push(...num2.splice(insertIndex));
//             }
//             return num1;
//         }
//         if(num1[i] > num2[insertIndex]){
//             num1.splice(i, 0, num2[insertIndex]);
//             insertIndex++;
//             if(insertIndex == n){
//                 return num1;
//             }
//         }
//     }
//     return num1;   
// }

// var mergeLeetCode = function(nums1, m, nums2, n){
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
// }


var mergeLeetCode2 = function(nums1, m, nums2, n){
    let p1 = 0;
    let p2 = 0;
    var sorted = new Array();
    let cur;
    while(p1 < m || p2 < n){
        if(p1 == m){
            cur = nums2[p2++];
        }else if(p2 == n){
            cur = nums1[p1++];
        }else if(nums1[p1] < nums2[p2]){
            cur = nums1[p1++];
        }else{
            cur = nums2[p2++];
        }
        sorted[p1+p2-1] = cur;
    }
    for(let i = 0; i < m+n; i++){
        nums1[i] = sorted[i];
    }
    return nums1
}



var num1 = [1];
var num2 = [];

console.log(mergeLeetCode2(num1, 1, num2, 0));