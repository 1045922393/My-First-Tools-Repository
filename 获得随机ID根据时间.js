function randomID() {

    function randomNM(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    return new Date().getTime() + '' + randomNM(100000, 999999);
}