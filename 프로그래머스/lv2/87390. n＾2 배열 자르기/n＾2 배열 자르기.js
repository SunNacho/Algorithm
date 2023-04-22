function solution(n, left, right) {
    let i=~~(left/n)+1;
    let j=(left%n)+1;
    const goalI=~~(right/n)+1;
    const goalJ=(right%n)+1;
    
    const result=[];
    
    for(i;i<=goalI;i++){
        if(i==goalI){
            for(j;j<=goalJ;j++){
                const maxIJ=Math.max(i,j);
          result.push(maxIJ);
            }
        }else{
        for(j;j<=n;j++){
            const maxIJ=Math.max(i,j);
           result.push(maxIJ);
        }
        j=1;
            }
    }
return result;
}