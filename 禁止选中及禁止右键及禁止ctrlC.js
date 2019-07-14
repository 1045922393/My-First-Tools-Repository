function banCopy() {
    document.addEventListener('contextmenu', (e) => { e.preventDefault() });
    let banSelect = document.createElement('style');
    banSelect.innerHTML = 'body{user-select:none;}';
    document.getElementsByTagName('head')[0].appendChild(banSelect);
    document.addEventListener('keydown', banCtrlC);
    function banCtrlC(e) {
        if (e.ctrlKey && e.keyCode == '67') e.preventDefault();
    }
}