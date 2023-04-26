function solution(n, t, m, p) {
    const arr = [];
    const answer = [];
    
    for(let i=0; i < 100000; i++){
        arr.push(i.toString(n));
    }
    
    let str = arr.join('');
    
    for(let j=0; j < t; j++){
            let idx = m*j+p-1;
         answer.push(str[idx]);
    }
    return answer.join('').toUpperCase();
}