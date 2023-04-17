/*
 * @Author: your name
 * @Date: 2021-08-12 16:10:58
 * @LastEditTime: 2021-08-12 16:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /letcode/sortedSquares.js
 */

 export function sortedSquares(nums) {
    let left = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            left = i;
        }else{
            break;
        }
    }

    let right = left + 1;
    let ans = [];
    let index = 0;
    while(index < nums.length){
        if(left < 0){
            ans[index] = Math.pow(nums[right], 2);
            right++;
        }else if(right == nums.length){
            ans[index] = Math.pow(nums[left], 2);
            left--;
        }else if(Math.pow(nums[right], 2) > Math.pow(nums[left], 2)){
            ans[index] = Math.pow(nums[left], 2);
            left--;
        }else{
            ans[index] = Math.pow(nums[right], 2);
            right++;
        }
        index++;
    }
    return ans;
};
