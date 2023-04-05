function solution(s) {
 return[...s].map((x,i)=>{
        if(i==0||[...s][i-1]==' '){
            return x.toUpperCase();
        }else{
            return x.toLowerCase();
             }
    }).join('')
}