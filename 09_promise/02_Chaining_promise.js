function login(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User Logged in: ", user);
            resolve();
        }, 1000)
    })
}

function profile(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User's Profile Fetched: ");
            resolve();
        }, 1000)
    })
}

function orders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders fetched");
            resolve();
        }, 1000);
    });
};

login("Rdx")
    .then(profile)
    .then(orders)
    .then(() => console.log("done"));


    // This is the chaining process in Promise.