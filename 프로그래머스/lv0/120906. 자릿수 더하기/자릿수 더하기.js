function solution(n) {
    var answer =  [...n.toString()].reduce((a,b)=>Number(a)+Number(b))
    return Number(answer);
}