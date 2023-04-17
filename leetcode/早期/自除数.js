/**
    给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 
 */

 var selfDividingNumbers = function(left, right){
    let ans = new Array()
    for(let i = left; i <= right; i++){
        if(selfDividing(i)){
            ans.push(i)
        }
    }
    return ans
 }

 var selfDividing = function(nums){
    const str = nums.toString()
    for(let i = 0; i < str.length; i++){
        const dividing = parseInt(str.charAt(i))
        if(dividing === 0){
            return false
        }
        if(nums % dividing !== 0){
            return false
        }
    }
    return true
 }

 const isSelfDividing = (num) => {
    let temp = num
    while(temp > 0){
        const digit = temp % 10
        if(digit === 0 || num % digit !== 0){
            return false
        }
        temp = Math.floor(temp / 10)
    }
    return true
 }

//  console.log(selfDividing(12));
console.log(selfDividingNumbers(47,85));