function solution(my_str, n) {
    const answer =[];
    for(i=0;i<=Math.floor(my_str.length/n);i++){
       my_str.substr(n*i,n) !== '' ? answer.push(my_str.substr(n*i,n)) : answer
    }
    return answer
}