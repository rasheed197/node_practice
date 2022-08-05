const path = require('path')

// Get file path separator
console.log(path.sep)

// Join directories
const filePath = path.join('\content', 'sub-folder', 'test.txt')
console.log(filePath)

// Return the base directory
const base = path.basename(filePath)
console.log(base)

// Return Absolute Path 
const absolute = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt')
console.log(absolute)