function solution(elements) {
    const circle = elements.concat(elements);
    const answer = [];
    
    let sum = elements[0];
    let count = 0;
    for(i=1;i<=elements.length;i++){
    while(count<elements.length){
        answer.push(sum);
        sum+=circle[count+i];
       sum-=circle[count];
       count++;
    }
        count=0;
        sum+=circle[i];
        }
    let set = new Set(answer)
 return set.size
}