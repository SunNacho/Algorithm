function solution(x) {
    const sum =x.toString().split('').map(x=>+x).reduce((acc,cur)=>acc+=cur);
    return Number.isInteger(x/sum);
}