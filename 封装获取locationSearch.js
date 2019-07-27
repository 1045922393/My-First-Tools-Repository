/**
 * 作用 获得地址栏的?后面的数据 返回出一个对象
 */
function getLocationSearch() {
    let stringtemp = location.search;
    stringtemp = stringtemp.substring(1);
    arrtemp = stringtemp.split('&');
    let obj = {};
    arrtemp.forEach(item => {
        let temp = item.split('=');
        obj[temp[0]] = temp[1];
    })
    return obj;
}