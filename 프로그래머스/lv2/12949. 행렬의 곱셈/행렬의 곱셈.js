function solution(arr1, arr2) {
    const answer = [];
    for(let a of arr1){
        const column = [];
        for(i=0;i<arr2[0].length;i++){
            let result = 0 ;
           for(j=0;j<arr1[0].length;j++){
               result += a[j]*arr2[j][i]
           }
           column.push(result);
        }
       answer.push(column)
    }
    return answer;
}