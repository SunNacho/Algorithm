function solution(n, k) {
    let result = 0;
    
    function isPrime(num){
        if(+num === 1) return false;
        if(+num === 2 || +num === 3) return true;
        for(i=2;i*i <= (+num);i++){
            if((+num)%i === 0) return false;
        }
        return true;
    }
    
    const arr = n.toString(k).split('0')
    
    for(let a of arr){
        if(a!=='' && isPrime(a)) result += 1;
    }
    
    return result;
}