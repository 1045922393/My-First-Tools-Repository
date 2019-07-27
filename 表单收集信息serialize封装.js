/**
 * 
 * @param {string} formSel  表单的选择器
 */
function serialize(formSel) {
    let form = document.querySelector(formSel);
    console.log(form)
    let upInput = form.querySelectorAll('[name]');
    console.log(upInput)
    let arr = []
    upInput.forEach(item => {
        if (item.type === 'radio' && item.checked) {
            let val = item.value;
            let key = item.name;
            arr.push(key + '=' + val)
        } else if (item.type !== 'radio') {
            let val = item.value;
            let key = item.name;
            arr.push(key + '=' + val)
        }
    })
    let str = arr.join('&');
    return str;
}