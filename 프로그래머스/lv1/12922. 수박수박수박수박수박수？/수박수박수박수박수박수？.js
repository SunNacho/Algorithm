function solution(n) {
    let answer=''
    for(i=0;i<n;i++){
        i%2==0? answer= answer+'수':answer=answer+'박'
    }
    return answer;
}