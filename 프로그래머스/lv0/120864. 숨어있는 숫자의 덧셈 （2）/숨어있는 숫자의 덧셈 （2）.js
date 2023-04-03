function solution(my_string) {
const arr = [...my_string];
    arr.forEach((v,i)=>{
        if(!(Number(v) ==v)){
            arr.splice(i,1,'*');
        }
    })
   return arr.join('').split('*').reduce((acc,cur)=> Number(acc)+Number(cur),0)
}