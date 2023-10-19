var climbStairs = function(n){
  const q = [[1, 1], [1, 0]];
  const res = pow(q, n);
  // return res[0][0];
  return res
}

const pow = (a, n) => {
  let ret = [[1, 0], [0, 1]];
  while(n > 0){
      if((n & 1) === 1){
          ret = multiply(ret, a);        
      }
      n >>= 1;
      a = multiply(a, a);
  }
  return ret;
}

const multiply = (a, b) => {
  const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
  for(let i = 0; i < 2; i++){
      for(let j = 0; j < 2; j++){
          c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]        
      }    
  }
  return c
}

let a = 1, b = 2, c = 3, d = 0
console.log(a&1, b&1, c&1, d&1)