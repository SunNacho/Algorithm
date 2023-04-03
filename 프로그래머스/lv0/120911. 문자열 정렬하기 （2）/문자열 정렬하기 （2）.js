function solution(my_string) {
    return [...my_string.toLowerCase()].sort((a,b)=>(a===b?0:a<b?-1:1)).join('');
}