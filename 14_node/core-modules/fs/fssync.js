const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const dirName = "exampleDirectory";

// Construct the this folder's path with the name of the required text file
const filePath = path.join(__dirname, fileName);
const dirPath = path.join(__dirname, dirName);

try {
    // Create a directory
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        console.log("Directory created.");
    }

    // Write to a file
    fs.writeFileSync(filePath, "Hello, world!");
    console.log("File has been written.");

    // Append to the file
    fs.appendFileSync(filePath, "\nHello again!");
    console.log("Data has been appended.");

    // Read the file
    const data = fs.readFileSync(filePath, "utf8");
    console.log("File content:", data);

    // Rename the file
    const newFilePath = `${dirPath}/newExample.txt`;
    fs.renameSync(filePath, newFilePath);
    console.log("File has been renamed.");

    // Get file stats
    const stats = fs.statSync(newFilePath);
    console.log("File stats:", stats);

    // Delete the file
    fs.unlinkSync(newFilePath);
    console.log("File has been deleted.");

    // Remove the directory
    fs.rmdirSync(dirPath);
    console.log("Directory has been removed.");
} catch (err) {
    console.error(`Error occurred - ${err.message}`);
}
