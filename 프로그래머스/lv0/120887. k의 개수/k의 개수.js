function solution(i, j, k) {
    const arr = [];
    for(i;i<=j;i++){
        arr.push(i)
    }
    return arr.join('').split(`${k.toString()}`).length-1;
}