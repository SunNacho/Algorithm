function solution(id_list, report, k) {
    const result = [];
    const users = [];
     
    for (const id of id_list) {
        users[id] = { reportedBy: [], reportTo: [], ban: false, success: 0 }
    }
    
    for(const a of report){
        const [reporter, reported] = a.split(' ');
        if (!users[reporter].reportTo.includes(reported)) users[reporter].reportTo.push(reported)
        if (!users[reported].reportedBy.includes(reporter)) users[reported].reportedBy.push(reporter)
        if (users[reported].reportedBy.length >= k) users[reported].ban = true
    }

    for (const c in users){
        if(users[c].ban){
            for(const b of users[c].reportedBy){
                users[b].success += 1;
            }
        }
    }
    
    for(const user in users){
        result.push(users[user].success)
    }
    
 return result;
}