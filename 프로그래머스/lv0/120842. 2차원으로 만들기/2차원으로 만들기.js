function solution(num_list, n) {
    var answer = []
    for(i=0;i<num_list.length;i+=n){
        const innerArray =[]
        for(j=i;j<i+n;j++){
            innerArray.push(num_list[j])
        }
        answer.push(innerArray)
    }
    return answer;
}