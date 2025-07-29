import path from "path"; // Importing the path module
import url from "url"; // Importing the url module

const filePath = "c/users/user/documents/file.txt";

// basename () - filename
console.log(path.basename(filePath));

// dirname() 
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

const __file = url.fileURLToPath(import.meta.url);
console.log(__file); 