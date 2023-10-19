var maxConsecutiveAnswers = function(answerKey, k){
    return Math.max(maxConsecutiveChar(answerKey,k,'T'), maxConsecutiveChar(answerKey,k,'F'))
}

// char为要替换的字符
// var maxConsecutiveChar = function(answerKey, k, char){
//     let maxLength = 0
//     for(let left = 0, right = 0, keyLen = 0; right < answerKey.length; right++){
//         keyLen += answerKey.charAt(right) !== char ? 1 : 0
//         while(keyLen > k){
//             keyLen -= answerKey[left++] !== char ? 1 : 0
//         }
//         maxLength = Math.max(maxLength, right-left+1)
//     }
//     return maxLength
// }

const maxConsecutiveChar = function(answerKey, k, ch){
    let n = answerKey.length
    let ans = 0
    for(let left = 0, right = 0, sum = 0; right < n; right++){
        sum += answerKey.charAt(right) !== ch ? 1 : 0
        while(sum > k){
            sum -= answerKey[left++] !== ch ? 1 : 0
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
}

console.log(maxConsecutiveAnswers("TTFTTTTTFT", 1))