function solution(s){
    const p = s.toLowerCase().match(/p/g) !== null ? s.toLowerCase().match(/p/g) : []
    const y = s.toLowerCase().match(/y/g) !== null ?s.toLowerCase().match(/y/g) : []
    
return p.length ==y.length ? true : false
}