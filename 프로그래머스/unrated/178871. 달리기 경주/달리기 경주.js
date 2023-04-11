function solution(players, callings) {
    const index = [];
    
    for(i=0; i < players.length ; i++){
        index[players[i]] = i;
    };
    
    for(i=0; i < callings.length ; i++){
       const prevIndex = index[callings[i]]-1
       const currentIndex = index[callings[i]]
       index[callings[i]]--;
        index[players[prevIndex]]++;
       let temp = players[prevIndex];
        players[prevIndex] = players[currentIndex];
        players[currentIndex] = temp;
    }
    return players
}