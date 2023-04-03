function solution(rsp) {
    const arr=[];
    for(i=0;i<rsp.length;i++){
        if(rsp[i]==='2'){
            arr.push(0)
        }else if(rsp[i]==='0'){
            arr.push(5)
        }else if(rsp[i]==='5'){
            arr.push(2)
        }
    }
    return arr.join('');
}