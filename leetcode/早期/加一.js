/*
 * @Author: your name
 * @Date: 2021-07-06 16:14:10
 * @LastEditTime: 2022-04-18 16:19:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /practice/leetcode/66-加一.js
 */
var plusOneS = function(digits){
    let n = digits.length;
    let i = n-1;
    while(i >= 0){
        if(digits[i] == 9){
            digits[i] = 0;
            if(i == 0){
                digits.splice(0, 0, 1);
                return digits;  
            }
            --i;
        }else{
            ++digits[i];
            return digits;        }
    }
}


var plusOne = function(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; --i) {
        if (digits[i] !== 9) {
            ++digits[i];
            for (let j = i + 1; j < n; ++j) {
                digits[j] = 0;
            }
            return digits;
        }
    }

    // digits 中所有的元素均为 9
    const ans = new Array(n + 1).fill(0);
    ans[0] = 1;
    return ans;
};

var arr = [1,2,3]
var arr2 = [9,9,9,9];
var arr3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var arr4 = [0]

console.log(plusOneS(arr4));