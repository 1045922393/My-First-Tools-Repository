function maxArr(a) {    //传数组    最大值
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        max = (max > a[i] ? max : a[i]);
    }
    return max;
}


function minArr(a) {    //传数组    最小值
    let mi = a[0];
    for (let i = 0; i < a.length; i++) {
        mi = (mi < a[i] ? mi : a[i]);
    }
    return mi;
}



function maxAll() {    //传参数 最大值
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        max = (max > arguments[i] ? max : arguments[i]);
    }
    return max;
}

function minAll() {    //传参数 最小值
    let mi = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        mi = (mi < arguments[i] ? mi : arguments[i]);
    }
    return mi;
}