var searchInsert = function(nums, target){
    const n = nums.length
    let left = 0 
    let right = n-1
    let ans = n
    while(left <= right){
        let mid = Math.floor(right + left)
        if(target <= nums[mis]){
            ans = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return ans
}