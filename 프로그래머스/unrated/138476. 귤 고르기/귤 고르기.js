function solution(k, tangerine) {
    let result = 0;
    const arr = {};
    for(i=0;i<tangerine.length;i++){
        arr[tangerine[i]] = (arr[tangerine[i]]||0) +1;
    }
    
    const sort = Object.entries(arr)
  .sort(([, a], [, b]) => b - a)
    
    for(i=0;i<sort.length;i++){
        k = k-sort[i][1]
        result += 1;
        if(k<=0){
            break;
        }
    }
    return result;
}