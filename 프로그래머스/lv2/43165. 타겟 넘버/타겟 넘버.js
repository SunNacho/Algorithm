function solution(numbers, target) {
    function recursion(num,index){
        if(index===numbers.length){
            if(num===target){
                return 1;
            }else{
                return 0;
            }
        }
       let num1 = num + numbers[index];
       let num2 = num - numbers[index];
        return recursion(num1,index+1)+recursion(num2,index+1);
    }
    return recursion(0,0)
}