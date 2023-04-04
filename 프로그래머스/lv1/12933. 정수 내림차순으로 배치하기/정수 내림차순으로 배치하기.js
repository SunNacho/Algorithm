function solution(n) {
   return n.toString().split('').map(x=>Number(x)).sort((a,b)=>b-a).join('')*1
}