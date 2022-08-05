const { readFileSync, writeFileSync } = require('fs')

// or

// const fs = require('fs')
// fs.readFileSync

// Read from content in first.txt and second.txt of the content folder
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// Write to file. Create a new file or overwrite existing file
writeFileSync(
    './content/result-sync.txt', 
    `Hello here is the result: ${first}, ${second}`
)

// Write to file. Craete a new file or append to existing file 
writeFileSync(
    './content/result-sync.txt', 
    `Hello here is the result: ${first}, ${second}`, 
    { flag: 'a' }
)