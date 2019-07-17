function upCheng(n) {
    if (n === 1) {
        return 1;
    }
    return n * upCheng(n - 1);
}