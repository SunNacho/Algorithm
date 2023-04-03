function solution(numlist, n) {
    const arr = [];
    for(let a of numlist){
        arr.push([Math.abs(a-n),a])
    }
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    const answer = [];
    for(let a of arr){
        answer.push(a[1])
    }
    return answer
}