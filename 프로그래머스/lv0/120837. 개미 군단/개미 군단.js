function solution(hp) {
    const captain=Math.floor(hp/5)
    const soldier=Math.floor((hp-captain*5)/3)
    const labor = hp-captain*5-soldier*3
return captain+soldier+labor;
}