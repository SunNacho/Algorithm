function solution(k, dungeons) {
    let result = -1;
    
    const dfs = (k,dungeons,prev) => {
     for(let i=0;i<dungeons.length;i++){
         if(!dungeons[i][0] || dungeons[i][0] > k) continue;
         const copyDungeons = [...dungeons];
            copyDungeons[i] = [null,null];
            dfs(k-dungeons[i][1], copyDungeons,prev + 1);
    }
    return (result = Math.max(prev,result));
}
    dfs(k,dungeons,0);
    return result;
}
