function solution(num1, num2) {
    var answer = -1;
    const q = Math.floor(num1/num2)
    answer = num1 - num2*q
    return answer;
}