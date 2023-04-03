function solution(food) {
    let frontWord = ''
    for(i=1;i<food.length;i++){
        frontWord += i.toString().repeat(~~(food[i]/2))
    }
    const backWord = frontWord.split('').reverse().join('')
    return frontWord + '0' + backWord
}