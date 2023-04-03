function solution(cipher, code) {
    const arr=[];
    let length = Math.floor(cipher.length/code)
    for(i=1;i<=length;i++){
        arr.push(cipher[code*i-1])
    }
    return arr.join('');
}