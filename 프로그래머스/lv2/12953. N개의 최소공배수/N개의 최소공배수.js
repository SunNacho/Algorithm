function solution(arr) {
   const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    let result = lcm(arr[0],arr[1]);
    
    for(i=2;i<arr.length;i++){
        result = lcm(result,arr[i]);
    }
    return result;
}