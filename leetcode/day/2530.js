var max = 0

var maxScore = (arr, k) => {
  for(var i = 0; i <= k; i++){
    process(arr)
  }
}

var process = (arr) => {
  // 生成随机数标识位
  var flag = Math.floor(Math.random()*arr.length)
  // 将分数增加
  max += arr[flag]
  console.log('now max', arr[flag], max)
  arr[flag] = Math.ceil(arr[flag]/3)
}

maxScore([1,10,3,3,3], 3)





/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  var max = 0
  for(var i = 0; i <= k; i++){
      process(nums, max)
  }
  return max
};

var process = (arr, max) => {
// 生成随机数标识位
var flag = Math.floor(Math.random()*arr.length)
// 将分数增加
max += arr[flag]
arr[flag] = Math.ceil(arr[flag]/3)
}