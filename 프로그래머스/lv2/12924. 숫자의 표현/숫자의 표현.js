function solution(n) {
    let result = 0;
    for(i=1;i<=n;i++){
         if((i*(i+1)/2)>n){
        break;
        }
        if(Number.isInteger((n-(i*(i+1)/2))/i)){
           result += 1; 
        }
    }
    return result;
}


