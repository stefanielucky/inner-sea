var removeElement = function(nums, val){
    let left = 0;
    let right = nums.length;
    while(left < right){
        if(nums[left] == val){
            nums[left] = nums[right-1];
            right--;
        }else{
            left++;
        }
    }  
    console.log(nums);
    return left;
}

var nums = [2,5,2,6,7,6,2];
removeElement(nums, 2);