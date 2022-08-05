const { readFile, writeFile } = require('fs')

// or

// const fs = require('fs')
// fs.readFile

console.log('Start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        writeFile(
            './content/result-async.txt', 
            `Hello here is the result: ${first}, ${second}`, 
            (err, result) => {
                if (err) {
                    console.log(error)
                    return
                }
                console.log('Done with this task')
            }
        )
    })
})

console.log('Strating next task')