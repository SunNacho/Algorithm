function solution(num_list) {
    var answer = [];
    for(i=1;i<=num_list.length;i++){
        answer.push(num_list.at(-i))
    }
    return answer;
}