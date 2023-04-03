function solution(name, yearning, photo) {
    const answer=[];
    for(let a of photo){
        let i = 0;
        for(let b of a){
            if(name.indexOf(b) !== -1){
            i = i + yearning[name.indexOf(b)];}
            else{i=i}
        }
        answer.push(i);
    }
    return answer;
}