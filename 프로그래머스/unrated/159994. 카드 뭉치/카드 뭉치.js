function solution(cards1, cards2, goal) {
    const copyGoal = [...goal]
    for(i=0;i<goal.length;i++){
        if(cards1[0]===copyGoal[0]){
            cards1.shift();
            copyGoal.shift();
        }else if(cards2[0]===copyGoal[0]){
            cards2.shift();
            copyGoal.shift();
        }
    }
    return copyGoal.length==0 ? 'Yes' : 'No';
}