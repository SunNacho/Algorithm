function solution(s) {
    let count = 0;
    let removed = 0;
    while(s!=='1'){
        const match = s.match(/0/g) !== null ? s.match(/0/g) : []
    removed += [...match].length;
       s = [...s.replace(/0/g,'')].length.toString(2);
        count += 1;
    }
    return [count, removed]
}