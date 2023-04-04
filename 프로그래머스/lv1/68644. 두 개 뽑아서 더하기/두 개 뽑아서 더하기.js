function solution(numbers) {
    const set = new Set()
    for(i=0;i<numbers.length;i++){
        for(j=i+1;j<numbers.length;j++){
            set.add(numbers[i]+numbers[j])
        }
    }
    return [...set].sort((a,b)=>a-b);
}