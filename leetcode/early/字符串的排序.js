const checkInclusion = function(s1, s2){
    // 需要凑齐的字符 滑动窗口
    let need = new Map()
    let window = new Map()
    for(let value of s1){
        if(need.hasOwnProperty(value)){
            need[value]++
        }else{
            need[value] = 1
            window[value] = 0
        }
    }
    // console.log(need, Object.keys(need).length, s2, s1)
    
    let left = right = 0
    // 窗口中满足need条件的字符个数
    let valid = 0

    while(right < s2.length){
        // c是将移入窗口的字符
        let c = s2.charAt(right)
        right++
        // 窗口内数据更新
        if(need[c]){
            window[c]++
            if(window[c] === need[c]){
                valid++
            }
        }

        // 判断左侧窗口是否需要收缩
        while(right - left >= s1.length){
            if(valid === Object.keys(need).length){
                return true
            }
            // d是将移除窗口的字符
            let d = s2[left]
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
    return false
}

const s = "ab"
const t = "eidbapooo"

console.log(checkInclusion(s, t))