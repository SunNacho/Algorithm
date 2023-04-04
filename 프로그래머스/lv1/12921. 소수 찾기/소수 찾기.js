function solution(n) {
    let answer = 0;
    for(j=2;j<=n;j++){
        let i=2;
    while(i<=~~Math.sqrt(j)){
        if(j%i===0){
            answer-=1
            break;
        }else{i++}
    }
        answer+=1
        
}
return answer}