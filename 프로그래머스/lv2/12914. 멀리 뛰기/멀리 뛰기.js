function solution(n) {
    let newArr = [1, 1];
 
  let fib = (n) => { 
    if (newArr[n] !== undefined){ 
      return newArr[n]; 
    }
    newArr[n] = fib(n - 1)%1234567 + fib(n - 2)%1234567;
    return newArr[n];
  };
  
  return fib(n)%1234567; 
}