// 官网输出
var tupleSameProduce = function(nums){
  const n = nums.length
  const cnt = new Map()
  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
      const key = nums[i] * nums[j]
      cnt.set(key, (cnt.get(key) || 0) + 1)
    }
  }
  let ans = 0

  // 输出组合数目
  for(const v of cnt.values()){
    ans += v * (v - 1) * 4
  }
  return ans
}

const arr1 = [2,3,4,6]
const arr2 = [1,2,4,5,10]
console.log(tupleSameProduce(arr2))


// 多指针方法
/**
 * 找不同组合
 * 外层双指针，前后双层遍历，从大组合到小组合
 * 内层双指针，从最中间两个数值计算，根据乘机判断内层指针移动
 */

/**
 * 输出组合方式
 * 输出4种组合方式
 * push到结果数组
 */