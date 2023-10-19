/*
 * @Author: your name
 * @Date: 2021-08-09 11:21:05
 * @LastEditTime: 2022-04-18 16:05:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /practice/两数之和.js
 */
// var twoSum = function(nums, target) {
//     for(let left = 0; left < nums.length -1; left++){
//         let rightTarget = target - nums
//         let targetNums = nums.slice(left+1)
//         let right = targetNums.indexOf(rightTarget)
//         if(right){
//             let ans = new Array()
//             ans.push(left)
//             ans.push(right)
//             return ans
//         }
//     }
// };

var twoSum = function(nums, target){
    let map = new Map()
    nums.forEach((item, index) => {
        map.set(item.toString(), index)
    })
    // return map
    for(let left = 0; left < nums.length - 1; left++){
        let targetRight = target - nums[left]
        let right = map.get(targetRight.toString())
        if(right !== undefined && right !== left){
            return [left, right]
        }
    }
}

let list = [3, 3];
// let newmap = new Map()
// newmap.set('0', 1)
// console.log(newmap.has('0'), newmap.get('2'));
console.log(twoSum(list, 6));
