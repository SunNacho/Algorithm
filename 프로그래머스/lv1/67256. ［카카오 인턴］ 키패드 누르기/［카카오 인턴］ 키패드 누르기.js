function solution(numbers, hand) {
    const leftSide = [1,4,7];
    const rightSide = [3,6,9];
    const center = [2,5,8,0];
    const coordinate=[[1,3],[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]];
    
    const answer =[];
    let leftHandState = [0,3];
    let rightHandState = [2,3];
    
    for(let a of numbers){
        if(leftSide.includes(a)){
            answer.push('L')
            leftHandState=coordinate[a]
        }else if(rightSide.includes(a)){
            answer.push('R')
            rightHandState=coordinate[a]
        }else if(center.includes(a)){
            let leftDistance = Math.abs(coordinate[a][0]-leftHandState[0])+Math.abs(coordinate[a][1]-leftHandState[1])
            let rightDistance = Math.abs(coordinate[a][0]-rightHandState[0])+Math.abs(coordinate[a][1]-rightHandState[1])
            if(leftDistance<rightDistance){
                answer.push('L')
                leftHandState=coordinate[a]
            }else if(leftDistance>rightDistance){
                answer.push('R')
                rightHandState=coordinate[a]
            }else if(leftDistance==rightDistance){
                if(hand==='left'){
                    answer.push('L')
                    leftHandState=coordinate[a]
                }else if(hand==='right'){
                    answer.push('R')
                rightHandState=coordinate[a]
                }
            }
        }
    }
    return answer.join('');
}