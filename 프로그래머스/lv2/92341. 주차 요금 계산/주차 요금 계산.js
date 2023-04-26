function solution(fees, records) {
    const result = [];
    
    const total = {};
    
    const stack = [];
    
    for(let i = 0; i < records.length; i++){
        let record = records[i].split(' ');
        if(record[2] ==='IN'){
        stack.push(record[0]);
        stack.push(record[1]);
            }else{
              let idx = stack.lastIndexOf(record[1]) -1 ;
              let inTime = stack[idx].split(':').map(v=>+v)
              let outTime = record[0].split(':').map(v=>+v)
              let time = (outTime[0]*60+outTime[1])-(inTime[0]*60+inTime[1]);
                
            !total[record[1]] ? total[record[1]] = time : total[record[1]] += time;
                
                stack.splice(idx,2);
            }
    }
    
    if(stack.length){
       for(let j=0; j < stack.length; j+=2){
       let inTime= stack[j].split(':').map(v=>+v);
         let time = 1439 - (inTime[0]*60+inTime[1]);
           !total[stack[j+1]]? total[stack[j+1]] = time : total[stack[j+1]] += time;
       }     
    }
    Object.keys(total).sort((a,b)=>a-b).map((v)=>{
        if(total[v]<fees[0]){ result.push(fees[1])}else{
            let fee = fees[1] + Math.ceil((total[v]-fees[0])/fees[2])*fees[3];
           result.push(fee);
        }
    })
    return result;
}