function solution(citations) {
    let H_Index= 0;
    for(i=1;i<=citations.length;i++){
        if(citations.filter(x=>x>=i).length>=i){
            H_Index = i;
        }else{
            break;
        }
    }
    return H_Index;
}