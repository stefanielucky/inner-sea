var trailingZeroes = function(n){
    let nums = 0
    for(let i = 5; i <= n; i+=5){
        for(let j = i; j%5 == 0; j/=5){
            nums++
        }
    }
    return nums
}

console.log(trailingZeroes(30))