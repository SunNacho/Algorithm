function solution(clothes) {
    const obj = {};
    let result = 1;
    for(let a of clothes){
        if(!obj[a[1]]){
            obj[a[1]] = 1;
        }else{
            obj[a[1]] += 1
            ;}
    }
    
    for(let i in obj){
        result *= (obj[i]+1);
    };
    return result-1;
}