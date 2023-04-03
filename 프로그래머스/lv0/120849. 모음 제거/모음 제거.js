function solution(my_string) {
    const array = ['a','e','i','o','u']
   return [...my_string].filter(x=>!array.includes(x)).join('')
    
}