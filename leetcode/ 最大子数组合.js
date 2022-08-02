/*
 * @Author: your name
 * @Date: 2021-04-29 16:50:28
 * @LastEditTime: 2022-04-18 16:22:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /practice/54-maxChildArr.js
 */
var maxChildArr = function(nums){
    let max = nums[0];
    for(let i = 0; i < nums.length; i++){
        let tempMax = nums[i];
        let leftSum = nums[i];
        for(let j = i+1; j < nums.length; j++){
            let sum = leftSum + nums[j];
            if(sum > tempMax){
                tempMax = sum;
            }
            leftSum = sum;
        }
        if(tempMax > max){
            max = tempMax;
        }
    }
    return max;
}

var maxSubArray = function(nums){
    let pre = 0, maxAns = nums[0];
    nums.forEach(element => {
        pre = Math.max(pre + element, element);
        maxAns = Math.max(maxAns, pre)
    });
    return maxAns;
}

var nums1 = [-2,1,-3,4,-1,2,1,-5,4];
var nums2 = [1];
var nums3 = [-1];
console.log(maxSubArray(nums1));