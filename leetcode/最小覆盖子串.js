// var minWindow = function(s, t){
//     let len = s.length
//     let str = ''
//     for(let right = left = 0; right <= s.length; right++){
//         let newStr = s.substring(left, right)

//         //判断是left是否右移
//         while(strContent(newStr, t)){
//             len = Math.min(len, right-left)
//             str = newStr
//             left++
//             newStr = s.substring(left, right)
//         }
//     }
//     return str
// }

// var strContent = function(s, t){
//     for(let i = 0; i < t.length; i++){
//         if(s.indexOf(t.charAt(i)) === -1){
//             return false
//         }
//         s = s.slice(i-1, i)
//     }
//     return true
// }

var s = "ADOBECODEBANC", t = "ABC"

const minWindow2 = function(s, t){
    // 需要凑齐的字符 滑动窗口
    let need = new Map()
    let window = new Map()
    for(let value of t){
        if(need.hasOwnProperty(value)){
            need[value]++
        }else{
            need[value] = 1
            window[value] = 0
        }
    }
    console.log(need, Object.keys(need).length, s.length)
    
    let left = right = 0
    // 窗口中满足need条件的字符个数
    let valid = 0

    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = s.length + 1

    while(right < s.length){
        // c是将移入窗口的字符
        let c = s.charAt(right)
        right++
        // 窗口内数据更新
        if(need[c]){
            window[c]++
            if(window[c] === need[c]){
                valid++
            }
        }

        // 判断左侧窗口是否需要收缩
        while(valid === Object.keys(need).length){
            if(right - left < len){
                start = left
                len = right - left
            }
            // d是将移除窗口的字符
            let d = s[left]
            left++
            // 窗口内数据更新
            if(need[d]){
                if(window[d] === need[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return len === s.length+1 ? "" : s.substr(start, len)
}

console.log(minWindow2(s, t))
