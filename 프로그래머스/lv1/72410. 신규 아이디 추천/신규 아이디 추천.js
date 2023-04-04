function solution(new_id) {
    const first = new_id.toLowerCase();
    const second = first.replace(/[^\w-._]+/g,'')
    const third = second.replace(/\.+/g,'.')
    const fourth = third.split('')
    if(fourth[0]=='.'){
        fourth.shift()
    }
    if(fourth.at(-1)=='.'){
        fourth.pop()
    }
    
    if(fourth.length==0){
        fourth.push('a')
    }
    
    if(fourth.length>=16){
        fourth.splice(15)
         if(fourth[0]=='.'){
        fourth.shift()
    }
    if(fourth.at(-1)=='.'){
        fourth.pop()
    }
    
    }
    
    if(fourth.length<=2){
        while(fourth.length<3){
            fourth.push(fourth.at(-1))
        }
    }

    return fourth.join('')
}