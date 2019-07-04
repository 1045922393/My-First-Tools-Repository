function getAbc(nameList, sp) {     //nameList 单引号引起来名字传入     sp  单引号引起连接符号
    let b = nameList.split(sp);
    let c = b[0];
    for (let i = 1; i < b.length; i++) {
        b[i] = (b[i].substring(0, 1)).toUpperCase() + b[i].substring(1);
        c = c + b[i];
    }
    return c;
}
