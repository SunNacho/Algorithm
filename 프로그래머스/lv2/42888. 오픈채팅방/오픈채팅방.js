function solution(record) {
    const result = [];
    
    const name = {};
    
    for(let i = 0; i < record.length; i++){
        let [act, user, nickName] = record[i].split(' ');
        if(act === 'Enter'){
            name[user] = nickName;
        }else if(act === 'Change'){
            name[user] = nickName;
        }
    }
    
    for(let j = 0; j < record.length; j++){
       let [act, user, nickName] = record[j].split(' ');
        if(act === 'Enter'){
            result.push(`${name[user]}님이 들어왔습니다.`);
        }else if(act === 'Leave'){
            result.push(`${name[user]}님이 나갔습니다.`);
        }
    }
    
    return result;
}