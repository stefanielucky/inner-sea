
// 1 冒泡
var popSort = function(arr){
    if(arr == null || arr.length < 2){
        return arr
    }

    return popProcess(arr)
}
function popProcess(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                swap(arr, j+1, j)
            }
        }
    }
    return arr
}

// 4 归并
var mergeSort = function(arr){
    if(arr == null || arr.length < 2){
        return arr
    }
    // let mid = left + (right-left)>>1
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
    let result = []
    while(left.length > 0 && right.length > 0){
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    if(left.length > 0) result.push(...left)
    if(right.length > 0) result.push(...right)
    
    console.log("this is result:", result)
    return result
}

// 5 快速
function quickSort(arr, left = 0, right = arr.length-1) {
    var partitionIndex;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
var res = quickSort(arr);
console.log(arr, res)