function canAction(arr){
    for(let a of arr){
        if(a>arr[0]){
            return false;
        }
    }
    return true;
}

function solution(priorities, location) {
    let result = 0;
    const pos_map = [];
    for(i=0;i<priorities.length;i++){
        pos_map.push(i);
    }
    while(priorities.length){
        if(!canAction(priorities)){
            priorities.push(priorities.shift())
            pos_map.push(pos_map.shift())
        }else{
            priorities.shift();
            const target = pos_map.shift();
            result += 1;
            if(target == location)  return result;
        }
    }
}