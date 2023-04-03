function solution(numbers, direction) {
    var answer = [];
    switch(direction){
        case 'right' : answer = numbers;
            answer.unshift(numbers.at(-1));
            answer.pop();
            return answer;
        case 'left' : answer = [...numbers];
            answer.shift();
            answer.push(numbers[0]);
            return answer;
    }
}