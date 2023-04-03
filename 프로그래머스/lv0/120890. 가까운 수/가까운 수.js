function solution(array, n) {
   const newArr= [...array].map(x=>Math.abs(n-x));
    const minValue = Math.min(...newArr);
    return Math.min(array[newArr.indexOf(minValue)],array[newArr.lastIndexOf(minValue)])
}