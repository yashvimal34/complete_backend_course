const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

//------ Above Code is to Creating Promise ------

// ----- Below code is Using Promise -----
promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error("Some error", err);
});