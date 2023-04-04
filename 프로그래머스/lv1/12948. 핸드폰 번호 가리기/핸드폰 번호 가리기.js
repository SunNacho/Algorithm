function solution(phone_number) {
    const answer = [...phone_number]
    for(i=0;i<phone_number.length-4;i++){
        answer[i]='*'
    };
    return answer.join('');
}