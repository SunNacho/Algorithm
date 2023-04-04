function solution(survey, choices) {
    const char = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    function test(i){
        if(choices[i]<4){
            char[survey[i][0]] += 4-choices[i]
        }else if(choices[i]>4){
            char[survey[i][1]] += choices[i]-4
        }
    }
    
    for(i=0;i<survey.length;i++){
        test(i)
    }
    
    const result = [];
    
    char.R>=char.T ? result.push('R') : result.push('T')
    char.C>=char.F ? result.push('C') : result.push('F')
    char.J>=char.M ? result.push('J') : result.push('M')
    char.A>=char.N ? result.push('A') : result.push('N')
    
    return result.join('')
}