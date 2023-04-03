function solution(common) {
   const isArith = (common[0]+common[2])===2*common[1] ? true : false;
    if(isArith){
       return common.pop()+common[1]-common[0]
    }else{
        return common.pop()*(common[1]/common[0])
    }
}