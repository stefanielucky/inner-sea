/*
 * @Author: your name
 * @Date: 2022-04-22 16:53:47
 * @LastEditTime: 2022-04-22 17:20:30
 * @LastEditors: Please set LastEditors
 * @Description: leetcode 509
 * @FilePath: /practice/leetcode/斐波那契数列.js
 */


var fib = function(n){
    if(n == 1 || n == 2) return 1
    let memo = new Array(n+1).fill(0)
    return helper(memo, n)
}

var helper = function(memo, n){
    // console.log(memo);
    // console.log(n)
    if(n == 1 || n == 2) return 1
    console.log('memo n:' ,memo[n])
    if(memo[n] !== 0) return memo[n]
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
    // console.log('memo[n]', memo[n], 'n', n);
    return memo[n]
}

console.log(fib(6));

// fib(3)
