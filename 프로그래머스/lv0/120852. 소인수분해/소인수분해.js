function solution(n) {
    const set= new Set();
    while(n%2==0){
        set.add(2)
        n=n/2
    }
    for(i=3;i<=n;i=i+2){
        while(n%i==0){
            set.add(i)
            n=n/i
        }
    }
    const answer = [...set]
    return answer;
}