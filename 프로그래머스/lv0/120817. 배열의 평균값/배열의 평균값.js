function solution(numbers) {
    const result = numbers.reduce((acc,cur)=>{return acc+=cur})
    const answer = result/numbers.length
    return answer;
}