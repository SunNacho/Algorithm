function solution(dartResult) {
    const regex = /\d+/g
    const cal =dartResult.split(regex)
    const arr =dartResult.match(regex)
    cal.shift()
    const answer = arr.map((x,i)=>{
        let n=0;
        if(cal[i].includes('S')){
            n=x
        }else if(cal[i].includes('D')){
            n=Math.pow(x,2)
        }else if(cal[i].includes('T')){
            n=Math.pow(x,3)
        }
        if(cal[i].includes('*')){
            return x=n*2
        }
        if(cal[i].includes('#')){
            return x=n*(-1)
        }
        return x=n
    })
    if(cal[1].includes('*')){
        answer[0]=answer[0]*2
    }
    if(cal[2].includes('*')){
        answer[1]=answer[1]*2
    }
    console.log(answer)
    return answer.map(x=>x*1).reduce((acc,cur)=>acc+=cur)
}