function solution(d, budget) {
   const arr = d.sort((a,b)=>a-b);
    let i = 0;
    let j =0;
while(i<=budget){
    i=i+arr[j];
   j++
}
    return j !==0 ? j-1:0;
}