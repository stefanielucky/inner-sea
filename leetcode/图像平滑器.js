var imageSmoother = function(img){
    let ans = []
    let len = img.length
    for(let row = 0; row < len; row++){
        let cur = new Array()
        for(let col = 0; col < img[row].length; col++){
            let avg = avgfun(img, row, col, len)
            cur.push(avg)
        }
        ans.push(cur)
    }
    console.log(ans)
    return ans
}

function avgfun(img, row, col, len){
    let left = row - 1 > 0 ? row - 1 : 0
    let right = row + 1 < len-1 ? row+ 1 : len-1
    let top = col - 1 > 0 ? col - 1 : 0
    let bottom = col + 1 < img[row].length-1 ? col+1 : img[row].length-1

    let sum = 0
    let nums = 0
    for(let i = left; i <= right; i++){
        for(let j = top; j<= bottom; j++){
            sum += img[i][j]
            nums++
        }
    }
    let avg = Math.floor(sum/nums)
    return avg
}

let img = [[100,200,100,100],[200,50,200,100],[100,200,100,100]]
imageSmoother(img)