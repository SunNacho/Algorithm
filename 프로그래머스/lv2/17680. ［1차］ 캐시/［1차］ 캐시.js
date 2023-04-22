function solution(cacheSize, cities) {
    const arr = [];
    let result = 0;
    if(cacheSize==0) return cities.length * 5;
    for(i=0; i < cities.length; i++){
        if(arr.includes(cities[i].toLowerCase())){
            result += 1;
            const index = arr.indexOf(cities[i].toLowerCase());
           arr.splice(index,1);
        }else{
            result += 5;
        }
       if(arr.length<cacheSize){
           arr.push(cities[i].toLowerCase());
       }else{
           arr.shift();
           arr.push(cities[i].toLowerCase());
       }
    }
    return result;
}