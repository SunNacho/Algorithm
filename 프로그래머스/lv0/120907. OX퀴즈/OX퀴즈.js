function solution(quiz) {
    const answer=[]
    for(let a of quiz){
       if(eval(a.split('=')[0])===eval(a.split('=')[1])){
           answer.push('O')
       }else{
           answer.push('X')
       }
    }
    return answer
}