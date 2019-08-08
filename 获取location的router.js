function getRouter() {
    let router = '';
    if (location.href.indexOf('?') != -1) {
        router = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.indexOf('?'))
    } else {
        router = location.href.substring(location.href.lastIndexOf('/') + 1)
    }
    return router
}