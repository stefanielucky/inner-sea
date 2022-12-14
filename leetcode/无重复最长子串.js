var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let right = -1, ans = 0;
    for (let left = 0; left < n; ++left) {
        if (left != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(left - 1));
        }
        while (right + 1 < n && !occ.has(s.charAt(right + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(right + 1));
            ++right;
        }
        // 第 left 到 right 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"))

s = 'abcdef'
console.log(s.charAt(0))