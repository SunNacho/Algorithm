function solution(n) {
    let first = 0;
    let second = 1;
    let third = 1;
    for(i=0;i<n-2;i++){
        first = second%1234567;
        second = third%1234567;
        third = (first+second)%1234567;
    }
    return third
}