function solution(n) {
    const arr= [];
    if(n!==0){
    for(i=1;i<=n;i++){
        if(n%i==0){
            arr.push(i)
        }
    }}else{return 0}
    return arr.reduce((acc,cur)=>acc+=cur);
}