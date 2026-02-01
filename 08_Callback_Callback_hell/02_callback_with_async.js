function getData(callback) {
    setTimeout(() => {
        callback("Server Data");
    }, 2000);
}

getData(function (data) {
    console.log(data);
});