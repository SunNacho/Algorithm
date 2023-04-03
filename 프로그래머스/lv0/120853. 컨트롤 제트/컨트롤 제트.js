function solution(s) {
    const arr = [...s.split(' ')].map(x=>Number(x));
    console.log(arr)
    let answer = 0;
    for(i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
        answer = answer+arr[i]
            console.log(answer)
        } else if(isNaN(arr[i])){
            answer = answer-arr[i-1]
            console.log(answer)
        }
    }
    return answer
}