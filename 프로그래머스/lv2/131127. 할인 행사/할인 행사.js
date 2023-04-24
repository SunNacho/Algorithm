function solution(want, number, discount) {
    let result = 0;
    
    const list = want.reduce((acc,cur,i)=>{return {...acc,[cur]:number[i]}},{});
    
    let discountList = {};
    
    for(i=0;i<10;i++){
        if(!discountList[discount[i]]){
            discountList[discount[i]] = 1;
        }else{
            discountList[discount[i]] += 1;
        }
    }
    
    function match(){
     for(let a of want){
         if(list[a]!==discountList[a])return false;
     }
        return true;
    }
    
    if(match()) result += 1;

    for(i=10;i < discount.length; i++){
        discountList[discount[i-10]] -= 1;
        
        if(!discountList[discount[i]]){
            discountList[discount[i]] = 1;
        }else{
            discountList[discount[i]] += 1;
        }
        if(match()) result += 1;
    }
    
    return result;
}