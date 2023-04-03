function solution(sizes) {
    const arr2 = sizes.reduce(function (acc, cur) {
  return [...acc, ...cur];
});
    const w = Math.max(...arr2);
    const h = Math.max(...sizes.map(x=>Math.min(...x)));
    return w*h;
}