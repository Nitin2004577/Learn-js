import fs from "fs"; // Importing the file system module


// synchronously
//    READ
// const result = fs.readFileSync("data.txt", "utf-8");
// console.log(result);

// const image = fs.readFileSync("ss.png", "base64");
// console.log(image);
//    WRITE
fs.writeFileSync("newFile.txt", " yes, This file is newly created");


//    UPDATE
fs.appendFileSync("newFile.txt", "\nThis is appended text.");
//    DELETE
fs.unlinkSync("newFile.txt");

// Asynchronous


// fs.readFile("data.txt", "utf-8", (error, data) => {
// if (error) {
//     console.log(error);
//     return; 
// }
// console.log(data);
// });

fs.writeFile("newFile.txt", "this is new file",(error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("File written successfully");
});