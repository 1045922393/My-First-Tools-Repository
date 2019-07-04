function m2cheng(m) {
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + 'x' + i + '=' + (j * i) + ' ');
        }
        document.write('<br/>');
    }
}