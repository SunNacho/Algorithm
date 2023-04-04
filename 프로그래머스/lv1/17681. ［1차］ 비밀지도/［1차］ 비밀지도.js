function solution(n, arr1, arr2) {
    const arr = arr1.map((x,i)=>x.toString(2)*1+arr2[i].toString(2)*1)
    const fixedArr = arr.map(x=>x.toString())
    for(i=0;i<fixedArr.length;i++){
        while(fixedArr[i].length<n){
            fixedArr[i] = '0'+fixedArr[i]
        }
    }
    const answer =fixedArr.map(x=>x.toString().replace(/[12]/g,'#')).map(x=>x.toString().replace(/0/g,' '))
    return answer
}