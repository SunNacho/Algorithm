function solution(n) {
    if(n%6===0){
        return n/6
    }else if(n%6!==0&&n%3===0){
        return n/3
    }else if(n%6!==0 && n%2===0){
        return n/2
    }else {
        return n
    }
}