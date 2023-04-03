function solution(sides) {
    var answer = 0;
    const array = sides.sort((a,b)=>a-b)
    console.log(array)
    if(array[2]<array[0]+array[1]){
       return answer = 1
    } else{
       return answer =2
    }
    return answer;
}