const path = require('path');

// path.basename(path, ext)
const filePath = '/path/to/file.txt';
const fileName = path.basename(filePath);
console.log('File name:', fileName); // Output: file.txt

// path.delimiter
console.log('Path delimiter:', path.delimiter);

// path.dirname(path)
const directoryName = path.dirname(filePath);
console.log('Directory name:', directoryName); // Output: /path/to

// path.extname(path)
const fileExtension = path.extname(filePath);
console.log('File extension:', fileExtension); // Output: .txt

// path.format(pathObject)
const pathObject = {
    dir: '/path/to',
    base: 'file.txt'
};
const formattedPath = path.format(pathObject);
console.log('Formatted path:', formattedPath); // Output: /path/to/file.txt

// path.isAbsolute(path)
const absolutePath = '/path/to/file.txt';
const relativePath = 'file.txt';
console.log('Is absolute:', path.isAbsolute(absolutePath)); // Output: true
console.log('Is absolute:', path.isAbsolute(relativePath)); // Output: false

// path.join(...paths)
const parentDir = '/path/to';
const filePathJoined = path.join(parentDir, fileName);
console.log('Joined path:', filePathJoined); // Output: /path/to/file.txt

// path.normalize(path)
const dirtyPath = '/path/to/../../file.txt';
const cleanPath = path.normalize(dirtyPath);
console.log('Clean path:', cleanPath); // Output: /file.txt

// path.parse(path)
const pathInfo = path.parse(filePath);
console.log('Parsed path:', pathInfo);

// path.posix
const posixPath = path.posix.join('/path', 'to', 'file.txt');
console.log('Posix path:', posixPath);

// path.resolve([...paths])
const resolvedPath = path.resolve('path', 'to', 'file.txt');
console.log('Resolved path:', resolvedPath);

// path.sep
console.log('Path separator:', path.sep);
