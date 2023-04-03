function solution(n) {
    const arr = Array.from(new Array(300), (x, i) => i + 1);
    for(i=1;i<=100;i++){
     arr.splice(arr.indexOf(3*i),1)
    }
   const newArr= arr.filter(x=>!x.toString().includes(3))
    console.log(newArr)
    return newArr[n-1]
}