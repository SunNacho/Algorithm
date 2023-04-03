function solution(numbers) {
    const list = [0,1,2,3,4,5,6,7,8,9]
    return list.filter(x=>!numbers.includes(x)).reduce((acc,cur)=>acc+=cur)
}