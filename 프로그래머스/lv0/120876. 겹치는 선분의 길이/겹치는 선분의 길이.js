function solution(lines) {
    for(let b of lines){
        b[0]+=100;
        b[1]+=100;
    }
    const arr=new Array(200).fill(0);
for(let a of lines){
    for(i=a[0];i<a[1];i++){
        arr[i]+=1
    }
}
    let answer=0;
    for(let a of arr){
        if(a>=2){
            answer+=1;
        }
    }
    return answer;
}