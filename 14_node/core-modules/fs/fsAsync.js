const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const dirName = "exampleDirectory";

// Construct the folder's path with the name of the required text file
const filePath = path.join(__dirname, fileName);
const dirPath = path.join(__dirname, dirName);

// Function to create directory (async)
const createDirectory = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, (err) => {
            if (err) reject(err);
            else {
                console.log("Directory created.");
                resolve();
            }
        });
    });
};

// Function to write to file (async)
const writeFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) reject(err);
            else {
                console.log("File has been written.");
                resolve();
            }
        });
    });
};

// Function to append to file (async)
const appendFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) reject(err);
            else {
                console.log("Data has been appended.");
                resolve();
            }
        });
    });
};

// Function to read file (async)
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Function to rename file (async)
const renameFile = (oldPath, newPath) => {
    return new Promise((resolve, reject) => {
        fs.rename(oldPath, newPath, (err) => {
            if (err) reject(err);
            else {
                console.log("File has been renamed.");
                resolve();
            }
        });
    });
};

// Function to get file stats (async)
const getFileStats = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.stat(filePath, (err, stats) => {
            if (err) reject(err);
            else resolve(stats);
        });
    });
};

// Function to delete file (async)
const deleteFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) reject(err);
            else {
                console.log("File has been deleted.");
                resolve();
            }
        });
    });
};

// Function to remove directory (async)
const removeDirectory = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.rmdir(dirPath, (err) => {
            if (err) reject(err);
            else {
                console.log("Directory has been removed.");
                resolve();
            }
        });
    });
};

(async () => {
    try {
        // Create directory
        if (!fs.existsSync(dirPath)) {
            await createDirectory(dirPath);
        }

        // Write to file
        await writeFile(filePath, "Hello, world!");

        // Append to file
        await appendFile(filePath, "\nHello again!");

        // Read file
        const data = await readFile(filePath);
        console.log("File content:", data);

        // Rename file
        const newFilePath = `${dirPath}/newExample.txt`;
        await renameFile(filePath, newFilePath);

        // Get file stats
        const stats = await getFileStats(newFilePath);
        console.log("File stats:", stats);

        // Delete file
        await deleteFile(newFilePath);

        // Remove directory
        await removeDirectory(dirPath);
    } catch (err) {
        console.error(`Error occurred - ${err.message}`);
    }
})();
