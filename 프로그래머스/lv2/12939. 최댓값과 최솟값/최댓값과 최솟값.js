function solution(s) {
    const array = s.split(' ').map(x=>+x);
    return [Math.min(...array),Math.max(...array)].join(' ')
}