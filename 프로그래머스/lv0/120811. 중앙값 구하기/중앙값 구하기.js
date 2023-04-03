function solution(array) {
    const sortArray= array.sort((a,b)=>a-b)
    var answer = sortArray[(array.length-1)/2];
    return answer;
}