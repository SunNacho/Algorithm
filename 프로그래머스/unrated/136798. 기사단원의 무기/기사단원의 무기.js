function solution(number, limit, power) {
    let array = new Array(number). fill(). map((v, i)=> i+1);
    function findDivisor(acc,cur){
        let n=0;
        for(i=1;i<=~~Math.sqrt(cur);i++){
            if(cur%i==0){
                n+=1;
            }
        }
        if(Number.isInteger(Math.sqrt(cur))){
            n= n*2-1
        }else{
            n= n*2
        }
        if(n>limit){
            return acc+=power
        }else{
            return acc+=n
        }
    }
  return array.reduce(findDivisor,0)
}