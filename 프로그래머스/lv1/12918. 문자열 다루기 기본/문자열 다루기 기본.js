function solution(s) {
    if(s.length!==4 && s.length!==6 || [...s].includes('e')){
        return false;
    }
    return !isNaN(+s)
}