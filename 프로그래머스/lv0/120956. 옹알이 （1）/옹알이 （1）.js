function solution(babbling) {
    var answer = 0;
    const test=["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
    for(i=0;i<babbling.length;i++){
        babbling[i]=babbling[i].replace('aya','1')
        babbling[i]=babbling[i].replace('ye','1')
        babbling[i]=babbling[i].replace('woo','1')
        babbling[i]=babbling[i].replace('ma','1')
        babbling[i]=babbling[i].replaceAll('1','')
        if(babbling[i]===''){
            answer=answer+1;
        }
    }
    
    return answer;
}