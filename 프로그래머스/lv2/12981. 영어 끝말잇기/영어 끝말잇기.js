function solution(n, words) {
    let dupIdx = -1;
    
    for(i = 0; i < words.length; i++) {
  const curWord = words[i];
  
  for(j = i+1; j < words.length; j++) {
    if(curWord === words[j]) {
      if(dupIdx == -1 || dupIdx>j+1) {dupIdx = j+1}
    }
  }
} //중복 찾기
    
    let wrongIdx = -1;
    
    for(i=1;i<words.length;i++){
        if(words[i-1].at(-1)!==words[i][0]){
            wrongIdx = i+1;
            break;
        }
    } //잘못 이어진 문자 찾기
    
    let idx = (dupIdx !== -1 && wrongIdx !== -1) ? Math.min(dupIdx,wrongIdx) : (dupIdx == -1) ? wrongIdx : (wrongIdx == -1) ? dupIdx : wrongIdx
    
    if(idx==-1){
        return [0,0]
    }else{
        return [idx%n!==0?idx%n : n, Math.ceil(idx/n)]
    }
}