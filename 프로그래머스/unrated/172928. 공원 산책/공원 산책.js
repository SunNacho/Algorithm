function solution(park, routes) {
   let pos = [0,0];
    
    for(i=0;i<park.length;i++){
        if(park[i].includes('S')){
            pos = [i,park[i].indexOf('S')];
            break;
        }
    } //초기 위치 탐색

    const direction = {E:[0,1], W:[0,-1], S:[1,0], N:[-1,0]}; //방향 지정
    
    for(let route of routes){
        let curPos = [...pos];
        let canMove = true;
        const [dir, dis] = route.split(' ');
        
        for(i=0;i<dis;i++){
            curPos[0] += direction[dir][0];
            curPos[1] += direction[dir][1]; //로봇 위치 변경
            
            if((curPos[0]>=park.length)||
              (curPos[0]<0)||
              (curPos[1]>=park[0].length)||
              (curPos[1]<0)){
                canMove = false;
                break;} //맵 밖으로 나갈 시 반복문 탈출
            
            if(park[curPos[0]][curPos[1]] === 'X'){
                canMove = false;
                break;} //장애물 만나면 반복문 탈출
            
        }
         if(canMove){pos = curPos}; //탈출 후 canMove이면 pos 재설정
    }
    return pos;
}