const fs = require('fs')

fs.readdir('./', (err, res) => {
    console.log(res)
})