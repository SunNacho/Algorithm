function solution(id_pw, db) {
   if(db.some(x=>{return id_pw[0]===x[0] &&id_pw[1]===x[1] })){
       return 'login'
   }else if(db.some(x=>{return id_pw[0]===x[0] &&id_pw[1]!==x[1] })){
       return 'wrong pw'
   }else{return 'fail'}
}