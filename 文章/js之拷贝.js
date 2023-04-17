var a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var b = [...a];
let shiftAns = b.shift() // 移除的是b

console.log("shiftAns is", shiftAns)

let doubleShift = shiftAns.shift() // shiftAns是【1，2】，再次从中shift，取到的是a的值
console.log("doubleShift is", doubleShift)
// b [[3, 4], [5, 6]]
// a [[2], [3, 4], [5, 6]]

console.log(a, b)

