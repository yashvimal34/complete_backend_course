function greet(name, callback) {
    console.log("Hello " + name);
    callback();
};

greet("Alex", function() {
    console.log("Good Bye");
});