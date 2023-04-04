function solution(participant, completion) {
    const parti=participant.sort();
    const comple=completion.sort();
    let i = 0;
    while(i<parti.length){
        if(parti[i]!==comple[i]){
            return parti[i]
            break;
        }
        i++
    }
}