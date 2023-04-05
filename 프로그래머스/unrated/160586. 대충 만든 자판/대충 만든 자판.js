function solution(keymap, targets) {
    const answer = [];
    for(let a of targets){
        let result = 0;
        for(i=0;i<a.length;i++){
            let idx = 1000;
            for(let b of keymap){
                if(b.indexOf(a[i])!==-1){
               idx = b.indexOf(a[i])+1 <= idx ? b.indexOf(a[i])+1 : idx;}
            }
            result += idx;
        }
        answer.push(result);
    }
    return answer.map(x=> x>=1000 ? x = -1 : x);
}