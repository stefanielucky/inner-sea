var longestCommonPrefix = function(strs){
    if(!strs[0].length){
        return ""
    }
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== strs[0][i])
            return strs[0].substr(0, i)
        }
    }
    return strs[0]
}

var strs = ["flower"]
console.log(longestCommonPrefix(strs))