function solution(str1, str2) {
    const regex = new RegExp(`${str2}`,'g')
    console.log(regex)
    if(str1.match(regex)){
        return 1
    } else{
        return 2
    }
}