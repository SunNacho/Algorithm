function solution(N, stages) {
    const result={};
    const arr = [];
    stages.forEach(x=>result[x]=(result[x]||0) +1);
    let nom = 0;
    let den = stages.length;
    for(i=1;i<=N;i++){
        nom=(result[i]||0)
        const failure = den!==0 ? nom/den : 0;
        arr.push({i:i, f:nom/den});
        den=den-nom;
    }
    console.log(arr)
    return arr.sort((a,b)=>b.f-a.f).map(x=>x.i)
}