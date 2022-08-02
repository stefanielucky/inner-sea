//给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 方法一，回溯
var findTargetSumWays = function(nums, target){
    let count = 0;
    const backtrack = (nums, target, index, sum) => {
        if(index === nums.length){
            if(sum === target){
                count ++;
            }
        }else {
            backtrack(nums, target, index+1, sum+nums[index]);
            backtrack(nums, target, index+1, sum-nums[index]);
        }
    }
    backtrack(nums, target, 0, 0);
    return count;
}

// 方法二，动态规划
var findTargetSumWays2 = function(nums, target){    
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    const diff = sum - target;
    if(diff < 0 || diff % 2 !==0){
        
    }
}

