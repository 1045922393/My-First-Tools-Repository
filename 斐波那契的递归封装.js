function FB(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return FB(n - 1) + FB(n - 2)
}
function sumFB(n) {
    if (n === 1) { return 1; }
    if (n === 2) { return 2; }
    return FB(n) + sumFB(n - 1);
}