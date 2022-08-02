//求字符串中出现连续重复字符的最大长度，比如："AAbbCCCddAA"，连续重复字符的最大长度是3
var str = "AA";

var lengthmax = function(str){
    let maxlength = 0;
    if(str == null){
        return maxlength;
    }
    if(str.length == 1){
        return 1;
    }
    // let sameBegin = 0;
    let nowBegin = 0;
    for(let i = 1; i < str.length; i++){
        if(str[i] == str[nowBegin]){
            maxlength = maxlength > i-nowBegin+1 ? maxlength : i-nowBegin+1;
        }else{
            nowBegin = i;
        }
    }
    return maxlength;
}

console.log(lengthmax(str))