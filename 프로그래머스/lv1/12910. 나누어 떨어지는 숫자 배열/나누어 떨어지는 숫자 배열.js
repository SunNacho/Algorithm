function solution(arr, divisor) {
    const answer = [...arr].filter(x=>x%divisor==0).length !==0 ? [...arr].filter(x=>x%divisor==0) : [-1]
    console.log(answer)
    return answer.sort((a,b)=>a-b);
}