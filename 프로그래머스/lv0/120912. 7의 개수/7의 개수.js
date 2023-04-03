function solution(array) {
    let answer = 0;
    [...array.join('')].forEach((x)=>{if(x==='7') answer++})
    return answer;
}