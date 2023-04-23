function solution(progresses, speeds) {
    let result = [];
    while(progresses.length>0){
         let count = 0;
    while(progresses[0]<100){
      progresses = progresses.map((x,i)=>x+speeds[i]);
    }
    while(progresses[0]>=100){
       progresses.shift();
        speeds.shift();
        count++;
    }
       result.push(count);
    }
    return result;
}