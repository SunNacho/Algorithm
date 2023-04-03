function solution(age) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j']
    const str = age.toString()
    const answer =[];
    for(i=0;i<str.length;i++){
        answer.push(alphabet[str[i]])
    }
    return answer.join('')
}