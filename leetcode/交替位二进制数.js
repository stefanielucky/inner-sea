var hasAlternatingBits2 = function(n){
    let isOne = (n) => n==1
    let isZero = (n) => n==0
    let newN = new Array()
    for(let i = n; i > 0; i = Math.floor(i/2)){
        newN.push(i%2)
    }
    return newN
}

var hasAlternatingBits = function(n){
    let prev = 2
    while(n !== 0){
        const cur = n % 2
        if(cur === prev){
            return false
        }
        prev = cur
        n = Math.floor(n / 2)
    }
    return true
}

var bits = (n) => n>>1

console.log(bits(7))

console.log(hasAlternatingBits(0))