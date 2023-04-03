function solution(k, score) {
        const answer = [];
    const arr = []
    for(i=0;i<Math.min(k,score.length);i++){
        arr.push(score[i]);
        arr.sort((a,b)=>b-a);
         answer.push(arr.at(-1))
    }
    for(i=k;i<score.length;i++){
        if(score[i]>arr.at(-1)){
            arr.pop();
       arr.push(score[i]);
            arr.sort((a,b)=>b-a);
            answer.push(arr.at(-1));
   }else{
       answer.push(arr.at(-1));
   }
    }
   
    return answer;
}