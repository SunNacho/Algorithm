
function getBraket(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (char === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (char === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    }
  }
    
  return stack.length === 0 ? 1 : 0;
}
function solution(s) {
    if(s.length%2!==0)return 0;
    let str = s;
    let result = 0;
    for(i=0; i < s.length ; i++){
        str = str.slice(1)+str[0];
        result += getBraket(str);
    }
    return result;
}