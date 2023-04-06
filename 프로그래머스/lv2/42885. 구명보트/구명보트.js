function solution(people, limit) {
    let front = 0;
    let back = people.length-1;
    let peoples = people.sort((a,b)=>b-a);
    let result = 0;
    
    while(front<back){
        let sum = peoples[front]+peoples[back];
        if(sum>limit){
            front ++;
        }else{
            front ++;
            back --;
        }
    result ++;
    }
    if(front==back){
        result ++;
    }
    return result;
}