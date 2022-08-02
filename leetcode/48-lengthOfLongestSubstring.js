var lengthOfLongestSubstring = function(s){
    var longest = 1;
    let begin = 0;
    for(end = begin + 1; end < s.length; end++){
        for(let section = begin; section < end; section++){
            if(s[section] == s[end]){
                
            }
        }
    }
    
}

var test_string = 'abcdefghijklmn';
console.log(test_string.slice(4, 0));
// console.log(test_string);
//截取开始位置的index，结束位置index(不包含)
//参数一大于等于参数二，返回空
//参数二为空的时候，表示数组结尾
//为负指代表数组从后往前计数
//无参数情况不操作不报错
//不改变原数组

console.log(test_string.substring(4, 0));
// console.log(test_string);
//开始位置的index，结束位置index（不包含）
//负数情况则转为0
//取两参数之间的值，且不改变原数组顺序
//参数二为空的时候，表示数组结尾
//无参数情况不操作不报错
//不改变原数组

console.log(test_string.substr(-2, -1));
// console.log(test_string);
//开始位置的index，结束位置index（不包含）
//参数一大于等于参数二，返回空
//负数情况则转为0
//参数二为空的时候，表示数组结尾
//无参数情况不操作不报错
//不改变原数组