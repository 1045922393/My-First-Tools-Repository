/**
 * @description 封装好ajax重复功能
 * @param {Object} option   对象
 * @param {string} option.type  异步对象的请求方式
 * @param  {string} option.data 请求发送数据
 */
function ajax(option) {
    option = option || {};
    option.type = option.type || 'get';
    option.url = option.url || '#';
    option.data = option.data || ''
    option.callback = option.callback || function () { console.log('请添加回调函数') }
    let xhr = new XMLHttpRequest();
    if (option.type === 'get') {
        option.url += '?' + option.data
    }

    xhr.open(option.type, option.url);
    if (option.type === 'post') {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(option.data)
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.responseText;
            option.callback(res);       //res才是实参
        }
    }
}