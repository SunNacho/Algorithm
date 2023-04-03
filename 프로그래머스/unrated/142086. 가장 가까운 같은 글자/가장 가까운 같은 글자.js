function solution(s) {
    const answer =[];
    const str = [...s]
    const copyS = [...s]
    for(i=0;i<str.length;i++){
        if(str.indexOf(str[i])===copyS.indexOf(str[i])){
            answer.push(-1);
            copyS[i]=''
        }else{
            answer.push(copyS.indexOf(str[i])-str.indexOf(str[i]));
            str[str.indexOf(str[i])]=''
                         copyS[i]='';
        }
    }
    return answer;
}