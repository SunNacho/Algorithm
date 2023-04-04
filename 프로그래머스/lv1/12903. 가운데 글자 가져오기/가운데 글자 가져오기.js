function solution(s) {
return  s.length%2==0 ?  [...s].splice(s.length/2-1,2).join('') : [...s].splice((s.length-1)/2,1).join('')
}