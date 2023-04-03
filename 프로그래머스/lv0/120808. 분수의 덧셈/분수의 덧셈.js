function solution(numer1, denom1, numer2, denom2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
const answer =[numer1*denom2+numer2*denom1,denom1*denom2]
return answer.map(x=>x/gcd(answer[0],answer[1]))
}