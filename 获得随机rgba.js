function randomInt(n,m){
    var r = Math.floor(Math.random()*(m-n+1)+n);
    return r;
}
function rColorRgba(){
    var r = randomInt(0,255);
    var g = randomInt(0,255); 
    var b = randomInt(0,255);
    var a = randomInt(0,100)/100;
    return 'rgba('+r+','+g+','+b+','+a+')';
}//获得随机rgba