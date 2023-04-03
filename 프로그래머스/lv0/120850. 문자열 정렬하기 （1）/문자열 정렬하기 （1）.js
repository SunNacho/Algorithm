function solution(my_string) {
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex,'');
    console.log(result)
    var answer = [...result].sort((a,b)=>a-b).map(x=>Number(x));
    return answer;
}