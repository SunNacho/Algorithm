function solution(str1, str2) {
    const arr1 = [];
    const arr2 = [];
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let intersection = 0;
    let union = 0;
    const regex = /^[a-z]*$/;
    
    for(i=0;i<lowerStr1.length-1;i++){
        let sliceStr = lowerStr1.slice(i,i+2);
        if(regex.test(sliceStr)){
        arr1.push(sliceStr);
        }
    }
    
    for(i=0;i<lowerStr2.length-1;i++){
        let sliceStr = lowerStr2.slice(i,i+2);
        if(regex.test(sliceStr)){
        arr2.push(sliceStr);
        }
    }
    
    const interEl = [...new Set(arr1.filter(x=>arr2.includes(x)))]
    
    const interObjInArr1 = interEl.reduce((accumulator, value, index) => {
      return {...accumulator, [value]: 0};
}, {});
    
    const interObjInArr2 = interEl.reduce((accumulator, value, index) => {
      return {...accumulator, [value]: 0};
}, {});
    
    for(let a of arr1){
        if(interEl.includes(a)){
            interObjInArr1[a] += 1;
        }
    }
    
    for(let a of arr2){
        if(interEl.includes(a)){
            interObjInArr2[a] += 1;
        }
    }
    
    for(let a of interEl){
        intersection += Math.min(interObjInArr1[a],interObjInArr2[a]);
    }
    
    union = arr1.length+arr2.length - intersection;
    
return union!==0 ? ~~((intersection/union)*65536) : 65536
}