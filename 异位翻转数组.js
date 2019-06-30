function reserveArray(array){   //翻转函数，将需要翻转的函数名作为实参传入
    var a =array.length-1;
    for (var i = 0;i<Math.floor(a/2);i++){
        array[i] = array[i]^array[a-i];
        array[a-i] = array[i]^array[a-i];
        array[i] = array[i]^array[a-i];
    }
    return array;
}