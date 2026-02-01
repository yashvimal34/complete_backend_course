function login(user, callback){
    console.log("User Logged in: ", user);

    setTimeout(() => {
        console.log("User logged in ");
        callback();
    }, 1000);
};

function getProfile(callback) {
    setTimeout(() => {
    console.log("Profile Fetched");
        callback();
    }, 1000);
};

function orders(callback) {
    setTimeout(() => {
    console.log("orders done");
    callback();
    }, 1000);
};

function payments(callback){
    setTimeout(() => {
    console.log("Payments Fetched");
        callback();
    }, 1000);
};

login("RDX", () => {
    getProfile(() => {
        orders(() => {
            payments(() => {
                console.log("Done");
            });
        });
    });
});