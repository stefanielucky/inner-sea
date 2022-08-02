/*
 * @Author: your name
 * @Date: 2021-08-10 10:41:29
 * @LastEditTime: 2021-08-12 16:14:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /letcode/209.js
 */

import defaultExport from 'sortedSquares';

var minSubArrayLen = function(target, nums){
    let n = nums.length;
    if(n==0){
        return 0;
    }
    let ans = n+1;
    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum += nums[j];
            if(sum >= target){
                ans = Math.min(ans, j-i+1);
                break;
            }
        }
    }
    return ans == n+1 ? 0 : ans;
}

var minSubArrayLen1 = function(target, nums){
    let length = nums.length
    let min = length
    let sums = [0]

    // 前n项的和
    for(let i = 1; i <= length; i++){
        sums[i] = sums[i - 1] + nums[i - 1]
    }

    for(let i = 0; i <= length; i++){
        let target = s + sums[i]
        let index = sortedSquares(sums, target)
        if(index < 0){
            index = -index-1;
        }
        if(index <= n){
            ans = Math.min(ans, index - i)
        }
    }
    return min = n ? 0 : min
}

let nums = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(11, nums))