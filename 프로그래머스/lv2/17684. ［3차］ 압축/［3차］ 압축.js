function solution(msg) {
    const answer = [];
    
    const dic= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    function check(str){
        if(dic.includes(str)) return dic.indexOf(str) + 1;
        
        for(let i=1;i<str.length;i++){
            if(dic.includes(str.slice(0,-i))){
                return dic.indexOf(str.slice(0,-i)) + 1;
            }
        }
    }
    
    while(msg.length){
            let subIdx = check(msg);
            answer.push(subIdx);
            dic.push(msg.slice(0,dic[subIdx-1].length + 1))
            msg = msg.slice(dic[subIdx-1].length);
    }
    
    return answer;
}