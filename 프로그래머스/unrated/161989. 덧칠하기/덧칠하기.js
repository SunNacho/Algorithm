function solution(n, m, section) {
    let standard = section[0];
    let result = 0;
    while(standard!==undefined){
       standard = section.find(x=>(standard+m)<=x)
        result +=1;
        if(standard===undefined){
            break;
        }
        }
    return result;
}