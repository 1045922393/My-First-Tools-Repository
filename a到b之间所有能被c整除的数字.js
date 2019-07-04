//将a到b之间所有能被c整除的数字添加到数组并返回至函数里面
function collectChu(a, b, c) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        if (i % c == 0) {
            arr.push(i);
        }
    }
    return arr;
}