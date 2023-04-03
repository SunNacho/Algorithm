function solution(A, B) {
    const A_Arr=[...A];
    for(i=0;i<A_Arr.length;i++){
        if(A===B){
            return i;
        }else{
        A_Arr.unshift(A_Arr.pop());
        if(A_Arr.join('')===B)
        return i+1
        }
    }
    return -1
}