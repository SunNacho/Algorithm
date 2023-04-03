function solution(s) {
    const dic = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9};
    const regex = /zero|one|two|three|four|five|six|seven|eight|nine|[0-9]/g
   return s.match(regex).map(x=> (typeof(dic[x]) !=='undefined')? dic[x] : Number(x) ).join('')*1
    
}