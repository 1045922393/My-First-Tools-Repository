/**
 * @description 功能是什么 - 封装好的移动端的单击操作
 * @param {element} tatget 
 * @param {function} fun 
 * @param {number} delay 允许按下的最大时间
 * @param {number} offset 允许位置最大偏差
 */

function tag(tatget, fun, delay, offset) {
    delay = delay || 200;
    offset = offset || 50;
    let touchTime;
    let touchPageX;
    let touchPageY;
    tatget.addEventListener('touchstart', function (e) {
        if (e.touches.length != 1) {
            return;
        }
        touchTime = Date.now();
        touchPageX = e.touches[0].pageX;
        touchPageY = e.touches[0].pageY;
    })
    tatget.addEventListener('touchend', function (e) {
        if (e.changedTouches.length != 1) {
            return;
        }
        let leaveTime = Date.now();
        if (leaveTime - touchTime >= delay) {
            // console.log('触摸太久了');
            return;
        }
        let leavePageX = e.changedTouches[0].pageX;
        let leavePageY = e.changedTouches[0].pageY;
        if (Math.abs(leavePageX - touchPageX) > offset || Math.abs(leavePageY - touchPageY) > offset) {
            // console.log('偏移太大');
            return;
        }
        // console.log('success')
        fun && fun();
    })
}