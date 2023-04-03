function solution(before, after) {
    const beforeArr = [...before]
    const afterArr = [...after]
    return JSON.stringify(beforeArr.sort()) === JSON.stringify(afterArr.sort()) ? 1: 0
}