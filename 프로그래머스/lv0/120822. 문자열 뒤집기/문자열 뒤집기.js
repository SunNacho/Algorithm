function solution(my_string) {
    var answer = '';
    for(i=1;i<=my_string.length;i++){
        answer = answer + my_string.at(-i)
    }
    return answer;
}