function solution(s, n) {
    const answer = [];
    for(let a of [...s]){
        if(a===' '){answer.push(' ')}
        else if(65<=a.charCodeAt(0) && a.charCodeAt(0)<=90){
            let idx = a.charCodeAt(0)+n>90 ? a.charCodeAt(0)+n-26 : a.charCodeAt(0)+n;
            answer.push(String.fromCharCode(idx))
        }else if(97<=a.charCodeAt(0) && a.charCodeAt(0)<=122){
             let idx = a.charCodeAt(0)+n>122 ? a.charCodeAt(0)+n-26 : a.charCodeAt(0)+n;
            answer.push(String.fromCharCode(idx))
        }
    }
            return answer.join('');
}