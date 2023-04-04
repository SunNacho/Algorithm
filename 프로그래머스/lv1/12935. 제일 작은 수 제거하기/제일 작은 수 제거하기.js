function solution(arr) {
   const index = ([...arr].indexOf([...arr].sort((a,b)=>b-a).pop()))
    arr.splice(index,1)
    return arr.length !== 0 ? arr:[-1];
}