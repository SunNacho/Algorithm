function solution(s) {
    const replaceS = s.replace(/{|}/g,'');
    const splitS = replaceS.split(',');
    const obj = {};
    for(let a of splitS){
        if(!obj[a]){obj[a] = 1}else{obj[a] += 1}
    }
    const answer = Object.keys(obj).sort((a,b)=>obj[b]-obj[a])
    
    return answer.map(x=>+x)
}