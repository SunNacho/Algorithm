function solution(array) {
    const arr = [...array].sort((a,b)=>b-a);
    return [arr[0],array.indexOf(arr[0])];
}