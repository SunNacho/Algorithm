function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    const regex = new RegExp(`[${skip}]`, 'g')
    const skippedAlphabet = alphabet.replace(regex,'')
    const answer = [];
    for(i=0;i<s.length;i++){
        let idx = skippedAlphabet.search((s[i]));
        let change = skippedAlphabet[idx+index];
        answer.push(change);
    }
return answer.join('')
}