function solution(number) {
    let result = 0;
     const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results; 
}
             const arr = getCombinations(number,3);
for(let a of arr){
    if(a.reduce((acc,cur)=>acc+=cur) ===0){
        result = result+1;
    }   
}
    return result
}