function solution(k, m, score) {
    let result = 0;
    const arr = score.sort((a,b)=>b-a)
    const num = ~~(score.length/m)
    for(i=1;i<=num;i++){
        result += arr[i*m-1]*m
    }
    return result;
}