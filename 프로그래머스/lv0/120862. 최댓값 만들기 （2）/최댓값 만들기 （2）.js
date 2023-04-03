function solution(numbers) {
    const arr = numbers.sort((a,b)=>b-a)
    const reverseArr = [...arr].reverse()
    console.log(arr);
    console.log(reverseArr);
    return Math.max(arr[0]*arr[1],reverseArr[0]*reverseArr[1]);
}