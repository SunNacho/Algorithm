function solution(array) {
   const getElCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
   const list = getElCount(array);
    const key = Object.keys(list);
    let arr = Object.values(list);
    let max =Math.max(...arr)
    const reverse = key.reverse().find(key=>list[key]===max)
    console.log(key.reverse())
    const answer = key.find(key=>list[key]===max)
    console.log(answer)
   return reverse === answer ? Number(answer) : -1
}