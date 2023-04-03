function solution(lottos, win_nums) {
    let answer=0;
    const zero = lottos.filter(x=>x===0)
    lottos.map(x=>win_nums.includes(x) ? answer+=1 : answer);
    const maximum = 7-answer-zero.length == 7 ? 6 : 7-answer-zero.length
    const minimum = 7-answer == 7 ? 6: 7-answer
    return [maximum,minimum]
}