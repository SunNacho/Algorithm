function solution(strings, n) {
    return strings.sort((a,b)=>(a.charCodeAt(n)-b.charCodeAt(n)) ==0 ? (a>b?1:-1) :(a.charCodeAt(n)-b.charCodeAt(n)))
}
