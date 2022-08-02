var letterCombinations = function(digits){
    let n = digits.length
    if(n === 0){
        return []
    }
    let letterMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    let arr = letterMap[digits[0]]
    console.log(arr)
    // for(let i = 1; i < n; i++){
    //     for(let j = 0; j < arr.length; j++){
    //         arr[j] = arr[j]+
    //     }
    // }
}

var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    // 数字到字母的映射
    const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const res = []
    // 回溯算法主函数
    const backtrack = (digits, start, sb) => {
        // 到达回溯树底部
        if (sb.length === digits.length) {
            res.push(sb.join(''))
            return
        }
        for (let i = start; i < digits.length; i++) {
            let digit = digits[i]
            for (let c of mapping[digit]) {
                // 做选择
                sb.push(c)
                // 递归下一层回溯树
                backtrack(digits, i + 1, sb)
                // 撤销选择
                sb.pop()
            }
        }
    }
    backtrack(digits, 0, [])
    return res
};

digits = "23"
letterCombinations(digits)