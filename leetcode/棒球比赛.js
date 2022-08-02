var bangqiu = function(ops){
    let arr = []
    for(let i = 0; i < ops.length; i++){
        let arrLength = arr.length
        if(ops[i] == "+"){
            if(arrLength == 1){
                arr.push(arr[arrLength - 1])
            }else if(arrLength > 1){
                arr.push(arr[arrLength-1] + arr[arrLength-2])
            }
        }else if(ops[i] == "D"){
            if(arrLength > 0){
                arr.push(arr[arrLength-1]*2)
            }
        }else if(ops[i] == "C"){
            if(arrLength > 0){
                arr.pop()
            }
        }else{
            arr.push(parseInt(ops[i]))
        }
    }
    let ans = arr.reduce((acc, cur) => acc+cur)
    return ans
}

var arr = ["1","C","-62","-45","-68"]
console.log(bangqiu(arr));