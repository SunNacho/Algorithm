function solution(price, money, count) {
    const change = price*count*(count+1)/2-money;
    return change >= 0 ? change : 0
}