var insertElement = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
        }else if(nums[i] > target){
            nums.splice(i, 0, target);
            return i;
        }
    }
    nums.splice(nums.length, 0, target);
    return nums.length - 1;
}

var nums = [1,2,5,7,8,19,24];

console.log(insertElement(nums, 27));
console.log(nums);