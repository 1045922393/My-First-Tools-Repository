function getSum(n) {
    if (n === 1) {
        return 1;
    }
    return n + getSum(n - 1)
}
