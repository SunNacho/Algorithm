function solution(order) {
    let answer = 0;
    [...order.toString()].map(x=>{if(Number(x)%3===0 &&Number(x)!==0)(answer=answer+1)})
    return answer;
}