function solution(money) {
    var answer = [];
    const cups = Math.floor(money/5500)
    answer.push(cups)
    answer.push(money-cups*5500)
    return answer;
}