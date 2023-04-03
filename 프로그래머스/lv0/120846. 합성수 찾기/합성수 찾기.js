function solution(n) {
    let answer=0;
    for(i=1;i<=n;i++){
        let j=2
        while(j<=~~Math.sqrt(i)){
            if(i%j===0){
                answer++;
                break;
            }
            j++;
        }
    }
    console.log(answer)
    
    return answer;
}