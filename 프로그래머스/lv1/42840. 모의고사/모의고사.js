function solution(answers) {
    const answer = []
    const firstArr = [1,2,3,4,5]
    const first = answers.filter((x,i)=>x===firstArr[i%5]).length
    const secondArr = [2,1,2,3,2,4,2,5]
const second = answers.filter((x,i)=>x===secondArr[i%8]).length
const thirdArr=[3,3,1,1,2,2,4,4,5,5]
const third = answers.filter((x,i)=>x===thirdArr[i%10]).length
const max = Math.max(first,second,third);
    if(max===first){answer.push(1)}
    if(max===second){answer.push(2)}
    if(max===third){answer.push(3)}
    return answer;
}