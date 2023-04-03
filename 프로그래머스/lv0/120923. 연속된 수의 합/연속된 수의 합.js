function solution(num, total) {
    const firstEl=Math.round(total/num-num/2)
    const answer=[]
    for(i=0;i<num;i++){
        answer.push(firstEl+i)
    }
    return answer
}