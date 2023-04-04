function solution(n, lost, reserve) {
    const firstList = [];
    const secondList= [];
    for(i=0;i<lost.length;i++){
        let b = reserve.find(x=>x===lost[i])
        if(b!==undefined){
            reserve.splice(reserve.indexOf(b),1)
        }
        if(b===undefined){
            firstList.push(lost[i])
        }
    }
    firstList.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    for(i=0;i<firstList.length;i++){
        let b = reserve.find(x=>Math.abs(x-firstList[i])===1)
        if(b!==undefined){
            reserve.splice(reserve.indexOf(b),1)
        }
        if(b===undefined){
            secondList.push(firstList[i])
        }
    }
    return n-secondList.length
}