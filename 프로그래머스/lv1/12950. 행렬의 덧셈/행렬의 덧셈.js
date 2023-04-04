function solution(arr1, arr2) {
    const answer = [];
    for(i=0;i<arr1.length;i++){
    const arr = arr1[i].map((x,j)=>x+arr2[i][j]);
         answer.push(arr)
    }
   
    return answer;
}