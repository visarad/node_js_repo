const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./server/js/sample.txt','utf-8')
const second = readFileSync('./server/in_first_folder.txt','utf-8')

console.log(first,second)

writeFileSync(
    './server/new_file.txt',
    `the new content is: ${first} ${second}`,
    {flag:'a'}
)



