function solution(my_string) {
  const str = my_string.replace(/[^0-9]/g, "");
    console.log(str)
    return [...str].reduce((a,b)=>Number(a)+Number(b))
    
}