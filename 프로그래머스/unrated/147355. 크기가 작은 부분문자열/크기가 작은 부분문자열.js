function solution(t, p) {
    let answer = 0;
    for(i=0;i<=t.length-p.length;i++){
        if([...t].splice(i,p.length).join('')*1<=p*1){
            answer+=1
        }
    }
    return answer;
}