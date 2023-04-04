function solution(X, Y) {
    let arrX=[0,0,0,0,0,0,0,0,0,0];
    let arrY=[0,0,0,0,0,0,0,0,0,0];
    X.split('').map(x=>arrX[x]++);
    Y.split('').map(x=>arrY[x]++);
    let arrXY=[0,0,0,0,0,0,0,0,0,0]
    let arrResult = [];
    arrXY.map((x,i)=>{
        arrXY[i]=Math.min(arrX[i],arrY[i]);
        for(let j =0 ; j < arrXY[i] ; j++){
            arrResult.push(i)
        }
    })
    arrResult.sort((a,b)=>b-a);
    if (arrResult[0] === 0){ arrResult = [0]}
    if (arrResult.length === 0) { arrResult = [-1] }
    return String(arrResult.join(""))
    
}