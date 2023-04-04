function solution(board, moves) {
    const basket = [];
    let result = 0;
    function spliceArr(){
        if(basket.length>=2 && basket[basket.length-2]==basket[basket.length-1]){
            result += 2;
            basket.splice(-2,2);
        }
    }
    for(i=0;i<moves.length;i++){
        let j=0;
        while(j<board.length){
            if(board[j][moves[i]-1]!==0){
                basket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1]=0;
                break;
            }
            j++;
        }
        spliceArr();
    }
    return result
}