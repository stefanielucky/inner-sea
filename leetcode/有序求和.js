// 有序数组，和是目标值的两个数

let arr = [1,2,5,6,8,9]

var sum = function (arr, target){
    // 处理异常
    if(arr === null || arr.length < 2){
        return null
    }

    for(let key = 0; key < arr.length; key ++){
        let second = target - key
        if(arr.includes(second)){
            return {'first': key, 'second': second}
        }
    }
}

var sum2 = function(arr, target){
    // 处理异常
    if(arr === null || arr.length < 2){
        return null
    }

    let arrMap = new Map([])
    console.log(arrMap)
}

sum2(arr, 6)