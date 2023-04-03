function solution(emergency) {
 const arr = [...emergency].sort((a,b)=>b-a);
 return emergency.map(x=>arr.indexOf(x)+1);
}