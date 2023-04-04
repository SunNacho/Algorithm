function solution(s) {
    let result = 0;
    const string = [...s];
    let first=0;
    let other=0;
    function testArr(){
        for(i=0;i<s.length;i++){
        if(string[i]===string[0]){
            first+=1;
        }else{
            other+=1;
        }
        if(first==other){
            let spliced = string.splice(0,i+1)
            result += 1;
            break;
        }
    }
    }
    while(0<string.length){
        testArr();
       if(first!==other || string.length==1){
            result +=1;
            break;
        }
    }
    return result;
}