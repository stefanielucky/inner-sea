//删除有序数组中的重复项
//原地删除
//使用语法糖后就不算原地了

var removeDuplicates = function(nums){
    if(nums.length ===0) return 0;
    for(let i = 0; i < nums.length - 1;){
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1);
        }else{
            i++;
        }
    }
    return nums.length;
}

var nums1 = [1,1,2];
var nums2 = [0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicates(nums2));

var removeDuplicatesLetcode = function(nums){
    const n = nums.length;
    if(n === 0) return 0;
    let fast = 1, slow = 1;
    while(fast < n){
        if(nums[fast] !== nums[fast-1]){
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
}

console.log(removeDuplicatesLetcode(nums2));

/**
    splice[start, [delete, [item1,item2]]]
    start 必须，起始位置
    delete 可选，移除数组的个数
    [item1,item2] 可选，填充的数组内容
 */
