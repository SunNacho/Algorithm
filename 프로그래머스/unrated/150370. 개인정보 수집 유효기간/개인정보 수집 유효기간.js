function solution(today, terms, privacies) {
    const result = [];
    const todayArr = today.split('.');
    const termsArr = terms.map(x=>x.split(' '));
    const privaciesArr = privacies.map(x=>x.split(/\.| /g));
    
    for(i=0;i<privaciesArr.length;i++){
        let term = privaciesArr[i][3]
        let num = 0;
        for(let a of termsArr){
            if(a.includes(term)){
                num = a[1]
                break;
            }
        }
        privaciesArr[i][0] = +privaciesArr[i][0] + ~~(num/12)
        privaciesArr[i][1] = +privaciesArr[i][1] + num%12
        privaciesArr[i][2] -= 1
        if(privaciesArr[i][1]>12){
            privaciesArr[i][0] += 1
            privaciesArr[i][1] -= 12
        }
        if(privaciesArr[i][2] == 0){
            privaciesArr[i][1] -=1;
            privaciesArr[i][2] = 28;
        }
        if(todayArr[0]>privaciesArr[i][0]){
            result.push(i+1)
        }else if(todayArr[0]==privaciesArr[i][0] && todayArr[1]>privaciesArr[i][1]){
            result.push(i+1)
        }else if(todayArr[0]==privaciesArr[i][0] && todayArr[1]==privaciesArr[i][1] && todayArr[2]>privaciesArr[i][2]){
            result.push(i+1)
        }
    }
    return result;
}