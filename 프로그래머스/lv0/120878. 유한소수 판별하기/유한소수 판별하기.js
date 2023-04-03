function solution(a, b) {
    const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
    let mother=b/gcd(Math.max(a,b),Math.min(a,b));
    console.log(mother)
    while(mother%2==0 | mother%5==0){
        if(mother%2===0){
            mother=mother/2
        }else if(mother%5===0){
            mother=mother/5
        }else{break;}
    }
    console.log(mother)
   return  mother==1 ?  1 :  2
}