function solution(my_string, n) {
    var answer = '';
    const array = [...my_string];
    array.map(word=>{for(i=1;i<=n;i++){
        answer= answer+ word}
    })
    
    return answer;
}