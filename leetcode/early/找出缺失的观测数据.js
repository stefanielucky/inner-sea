var missingRolls = function(rolls, mean, n){
    // 计算总和
    let sum = mean*(rolls.length + n)
    // 计算剩余n总和
    let rollsSum = rolls.reduce((sum, acc) => sum + acc)
    let otherSum = sum - rollsSum

    console.log("总和",sum,";rollsSum",rollsSum,";otherSum",otherSum)
    if(otherSum > n*6 || otherSum < n) return []
    let ans = []
    let junzhi = Math.floor(otherSum/n)
    let remainder = otherSum % n
    for(let i = 0; i < n; i++){
        ans[i] = junzhi + (i < remainder ? 1 : 0)
    }
    return ans
}

var missingRolls2 = function(rolls, mean, n){
    const m = rolls.length
    const sum = mean*(n + m)
    let missingSum = sum
    for(const roll of rolls){
        missingSum -= roll
    }
    if(missingSum < n || missingSum > 6*n){
        return []
    }
    const quotient = Math.floor(missingSum / n)
    const remainder = missingSum % n
    const missing = new Array(n).fill(0)
    for(let i = 0; i < n; i++){
        missing[i] = quotient + (i < remainder ? 1 : 0 )
    }
    return missing
}

var rolls = [4,5,6,2,3,6,5,4,6,4,5,1,6,3,1,4,5,5,3,2,3,5,3,2,1,5,4,3,5,1,5]
console.log(missingRolls(rolls, 4, 40))