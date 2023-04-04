function solution(nums) {
    const arr = [];
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                arr.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    let answer = 0;
    
    function isPrime(num) {
  if(num === 2)
  return true;

  for(let i = 2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
    for(let a of arr){
        if(isPrime(a)){
            answer+=1
        }
    }
    return answer;
}