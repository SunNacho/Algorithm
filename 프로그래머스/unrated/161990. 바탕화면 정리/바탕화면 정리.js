function solution(wallpaper) {
    let rdx = 0;
    let rdy = 0;
    let lux = 0;
    let luy = -1;
    for(i=0;i<wallpaper.length;i++){
        if(wallpaper[i].includes('#')){
            lux = i
            break;
        }
    }
    for(i=wallpaper.length-1;i>=0;i--){
        if(wallpaper[i].includes('#')){
            rdx = i+1
            break;
        }
    }
    for(let a of wallpaper){
        if(a.includes('#')){
            luy == -1 ? luy = a.indexOf('#') : luy > a.indexOf('#') ? luy = a.indexOf('#') : luy=luy
        }
    }
    for(let a of wallpaper){
        if(a.includes('#')){
            rdy == 0 ? rdy = a.lastIndexOf('#')+1 : rdy<a.lastIndexOf('#')+1 ? rdy = a.lastIndexOf('#')+1 : rdy = rdy
        }
    }
    return [lux,luy,rdx,rdy]
}