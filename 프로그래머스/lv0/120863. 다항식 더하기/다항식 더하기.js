function solution(polynomial) {
    const arr = polynomial.split(' ');
    const firstOrder = arr.filter(x=>x.includes('x'));
    const constant = arr.filter(x=>!x.includes('x')&&!x.includes('+'));
    let constantValue=0;
    let firstOrderValue = 0;
for(let x of firstOrder){
    if(x==='x'){
        firstOrderValue +=1;
    }else{
        firstOrderValue += Number(x.replace(/[^0-9]/g,""));
    }
}
    const firstValue = firstOrderValue === 0 ? '' : firstOrderValue===1 ? 'x' : firstOrderValue + 'x'
    for(let x of constant){
        constantValue+=Number(x)
    }
    return constantValue !==0 &&firstValue!=='' ? firstValue+' + '+constantValue : constantValue===0 && firstValue !== '' ? firstValue : constantValue.toString()
}