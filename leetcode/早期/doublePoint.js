/*
 * @Author: your name
 * @Date: 2021-07-02 10:37:29
 * @LastEditTime: 2022-04-19 19:35:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_two/code/0715.js
 */


var remove = function(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        if(nums[left] == target){
            nums[left] = nums[right];
            right--;
        }else {
            left++;
        }
    }
    return right;
}

var moveTarget = function(nums, target){
    var left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] != target){
            nums[left] = nums[right];
            left++;
        }
    }
    console.log(left);
    while(left < nums.length){
        nums[left] = target;
        left ++;
    }
    return nums;
}

var moveZeroes = function(nums) {
    /* // 自己实现方法
    var left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] != 0){
            nums[left] = nums[right];
            left++;
        }
    }
    console.log(left);
    while(left < nums.length){
        nums[left] = 2;
        left++;
    } */

    let left = 0, right = 0;
    for(right = 0; right < nums.length; right++){
        if(nums[right] != 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }

    /* // letcode方法
    while(right < nums.length){
        if(nums[right]){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[left] = temp;
            left++;
        }
        right++;
    } */
    return nums;
};

var sortedSquares = function(nums) {
    let left = 0;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i]*nums[i+1] <= 0){
            left = i;
            break;
        }
    }
    let alldec = nums[0] >= 0;
    for(let j = 0; j < nums.length; j++){
        nums[j] = Math.pow(nums[j], 2);
    }
    if(left == 0) {
        if(alldec) return nums;
        else return nums.reverse();
    }
    if(left == nums.length) return nums;
    let ans = [];
    let right = left + 1;
    while(left >=0 && right < nums.length){
        if(nums[left] < nums[right]){
            ans.push(nums[left]);
            left--;
        }else{
            ans.push(nums[right]);
            right++;
        }
    }
    console.log(left);
    console.log(right);
    if(left >= 0){
        let temp = nums.splice(0, left+1);
        ans = ans.concat(temp.reverse());
    }
    if(right <= nums.length){
        let temp = nums.splice(right);
        ans = ans.concat(temp);
    }
    return ans;
};

// js的sort是字符串排序
var sortedSquares1 = function(nums){
    let i = 0;
    while(i<nums.length){
        nums[i] = Math.pow(nums[i], 2);
        i++;
    }
    nums = nums.sort();
    return nums;
}

var list = [1, 4, 2, 6, 8, 2, 9, 3, 1, 2, 2, 6, 2];
var list2 = [1];
var list3 =[-4,-1,0,3,10];

// console.log(sortedSquares1(list3));

/* 
    //copyWithin方法，浅拷贝
var obj = [1,2,[1,2,4]];
var b = obj.copyWithin();
obj[2] = [2,2,2];
obj = [1];
console.log(obj, b); 
*/

var sortedSquares = function(nums) {
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

var sortedSquares2 = function(nums){
    let ans = [];
    for(let i = 0, j = nums.length - 1, index = nums.length - 1; i <=j ;){
        if(Math.pow(nums[i], 2) < Math.pow(nums[j], 2)){
            ans[index] = Math.pow(nums[j], 2);
            j--;
        }else{
            ans[index] = Math.pow(nums[i], 2);
            i++;
        }
        index--;
    }
    return ans;
}

let nums = [-7,-3,2,3,11];
console.log(sortedSquares2(nums));