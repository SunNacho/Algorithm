function solution(babbling) {
    let result = 0;
    const regex = /(?<!aya)aya(?!aya)|(?<!ye)ye(?!ye)|(?<!woo)woo(?!woo)|(?<!ma)ma(?!ma)/g
    for(let a of babbling){
        if(a.replace(regex,'')===''){
            result += 1;
        }
    }
    return result;
}