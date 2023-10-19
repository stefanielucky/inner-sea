var busiestServers = function(k, arrival, load){
    // 服务器处理次数
    let serversCost = new Array(k).fill(0)
    // 服务器当前任务时间
    let serverTime = new Array(k).fill(0)
    // 待完成任务 - 对arrival进行判断
    for(let i = 0; i < arrival.length; i++){
        // 如果serverTime中时间都大于当前arrvial，就丢掉
        // 否则，对可以服务器进行计时累加
        for(let j = 0; j < k; j++){
            let now = (i + j) % k
            // console.log(now, j)
            if(serverTime[now] <= arrival[i]){
                serverTime[now] = arrival[i] + load[i]
                serversCost[now]++
                break
            }
        }
    }
    // console.log(serverTime, serversCost)
    let max = 0
    let maxIndex = []
    for(let i = 0; i < k; i++){
        if(serversCost[i] > max){
            maxIndex = []
            maxIndex.push(i)
            max = serversCost[i]
        }else if(serversCost[i] === max){
            maxIndex.push(i)
        }
    }
    // console.log(max, maxIndex)
    return maxIndex
}


let k = 3
let arrival = [1,2,3,4,8,9,10]
let load = [5,2,10,3,1,2,2]
busiestServers(k, arrival, load)