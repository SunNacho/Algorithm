function solution(numbers, k) {
return (2*k-1)%numbers.length ? (2*k-1)%numbers.length : numbers.length
}