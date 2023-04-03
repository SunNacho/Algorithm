function solution(score) {
    const result = score.map(x=>x[0]+x[1])
    const sortArr = [...result].sort((a,b)=>b-a)
    console.log(result)
    console.log(sortArr)
return result.map(x=>sortArr.indexOf(x)+1)
}