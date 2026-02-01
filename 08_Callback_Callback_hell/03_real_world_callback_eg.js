import fs from "fs";
// Read file asynchronously
fs.readFile("file.txt", "utf8", (err, data) => {
    if(err) {
        console.error("Error reading file", err.message);
        return;
    }

    console.log("File Content");
    console.log(data);
});

console.log("This lines runs before file is read");