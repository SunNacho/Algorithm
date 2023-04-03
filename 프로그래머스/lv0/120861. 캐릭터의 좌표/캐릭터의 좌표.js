function solution(keyinput, board) {
    let x=0;
    let y=0;
    for(i=0;i<keyinput.length;i++){
        if(keyinput[i]==='right'){
           x == (board[0]-1)/2 ? x : x= x+ 1
        }else if(keyinput[i]==='left'){
            x == -(board[0]-1)/2 ? x : x= x- 1
        }else if(keyinput[i]==='up'){
            y == (board[1]-1)/2 ? y : y= y+ 1
        }else if(keyinput[i]==='down'){
            y == -(board[1]-1)/2 ? y : y= y- 1
        }
    }
    const answer = [x,y];
    return answer;
}