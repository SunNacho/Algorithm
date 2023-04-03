function solution(n) {
    function factorial(m){
        let sum=1;
        for(i=1;i<=m;i++){
            sum = sum*i
        }
        return sum
    }
    let j=1;
 while(j<n){
     if(factorial(j)>n){
         break;
     }
     console.log(j)
     console.log(factorial(j))
     j++
 }
    return j === 1 ? j : j === 2 ? j : j-1
    
}