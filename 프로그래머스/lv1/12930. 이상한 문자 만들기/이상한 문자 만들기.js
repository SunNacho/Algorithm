function solution(s) {
  const arr =s.split(' ')
  const answer =[];
  for(let a of arr){
   answer.push([...a].map((x,i)=>i%2==0 ? x.toUpperCase() : x.toLowerCase()).join(''))
  }
  return answer.join(' ')
}