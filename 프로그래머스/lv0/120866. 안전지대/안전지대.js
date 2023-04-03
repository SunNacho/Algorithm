function solution(board) {
    const n = board.length;
    let answer = n ** 2; 
    let dangers = [];
    board.forEach(a => {
        dangers.push(a.map((b => b = 0)));  
    });
    if (n === 1) {  
        if (board[0][0] === 1) return 0;
        else return 1;
    }
    board.forEach((x, i) => {
        x.forEach((y, j) => {
            (y === 1) ? dangers = check(i, j, n, dangers) : null;
        });
    });
    dangers.forEach(array => {
        answer -= array.filter(z => z === 1).length ;
    });
    return answer;
}

function check(i, j, n, dangers) {
    switch (i) {
        case 0:
            switch (j) {
                case 0:  
                    dangers[i][j]=1, dangers[i][j+1]=1, dangers[i+1][j]=1, dangers[i+1][j+1]=1;
                    break;
                case n-1:  
                    dangers[i][j-1]=1, dangers[i][j]=1, dangers[i+1][j-1]=1, dangers[i+1][j]=1;
                    break;
                default:  
                    dangers[i][j-1]=1, dangers[i][j]=1, dangers[i][j+1]=1,
                    dangers[i+1][j-1]=1, dangers[i+1][j]=1, dangers[i+1][j+1]=1;
                    break;
            }
            break;
        case n-1:
            switch(j) {
                case 0:  
                    dangers[i-1][j]=1, dangers[i-1][j+1]=1, dangers[i][j]=1, dangers[i][j+1]=1;
                    break;
                case n-1:  
                    dangers[i-1][j-1]=1, dangers[i-1][j]=1, dangers[i][j-1]=1, dangers[i][j]=1;
                    break;
                default:  
                    dangers[i-1][j-1]=1, dangers[i-1][j]=1, dangers[i-1][j+1]=1,
                    dangers[i][j-1]=1, dangers[i][j]=1, dangers[i][j+1]=1;
                    break;
            }
            break;
        default:
            switch (j) {
                case 0:  
                    dangers[i-1][j]=1, dangers[i-1][j+1]=1,
                    dangers[i][j]=1, dangers[i][j+1]=1,
                    dangers[i+1][j]=1, dangers[i+1][j+1]=1;
                    break;
                case n-1:
                    dangers[i-1][j-1]=1, dangers[i-1][j]=1,
                    dangers[i][j-1]=1, dangers[i][j]=1,
                    dangers[i+1][j-1]=1, dangers[i+1][j]=1;
                    break;
                default:
                    dangers[i-1][j-1]=1, dangers[i-1][j]=1, dangers[i-1][j+1]=1,
                    dangers[i][j-1]=1, dangers[i][j]=1, dangers[i][j+1]=1;
                    dangers[i+1][j-1]=1, dangers[i+1][j]=1, dangers[i+1][j+1]=1;
                    break;
            }
            break;
    }
    return dangers;
}