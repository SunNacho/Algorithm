function solution(ingredient) {
    let result = 0;
    const counterTop = [];
    
    for(i=0;i<ingredient.length;i++){
        counterTop.push(ingredient[i])
        let counterTopTail = counterTop.slice(counterTop.length-4)
        if(counterTopTail.join('')==='1231'){
            result+=1;
            counterTop.splice(counterTop.length-4,4)
         }
        }
    return result;
}