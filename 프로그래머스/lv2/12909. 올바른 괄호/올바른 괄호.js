function solution(s){
    const arr = [];
    let left = 0;
    let right = 0;
    for(i=0;i<s.length;i++){
        if(s[i]=='('){
            left += 1;
        }
        else if(s[i]==')'){
            right += 1;
        }
       
        if(right>left){
            return false;
            break;
        }
    }
    if(right !==left){
        return false
    }
    return true;
}