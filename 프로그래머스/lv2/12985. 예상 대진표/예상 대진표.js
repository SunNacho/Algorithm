function solution(n,a,b)
{   let exp= 0;
    for(i=1;i<=20;i++){
        if(2**i==n){
            exp = i;
            break;
        }
    }
 let result = exp;
 for(i=1;i<=exp;i++){
     if(a<=n/2 && b<=n/2){
         result -= 1;
         n = n/2;
     }else if(a>n/2 && b>n/2){
         a -= n/2;
         b -= n/2;
         result -= 1;
         n = n/2;
     }else{
         return result;
         break;
     }
 }

    return exp;
}