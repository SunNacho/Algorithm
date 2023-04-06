function solution(brown, yellow) {
    const c = brown+yellow;
    const b = (brown+4)/2;
    return [(b+Math.sqrt(b*b-4*c))/2,(b-Math.sqrt(b*b-4*c))/2]
}