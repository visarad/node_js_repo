const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./server/js/first.txt','utf-8',(err,result)=>{

    if (err){
        console.log(err)
        return
    }
    const first = result

    readFile('./server/second.txt','utf-8',(err,result)=>{

        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './server/result.txt',
            `${first} ${second}`,
            {flag:'a'},
            (err,result)=>{
                if (err){
                    console.log(err)
                    return
                }
                else {
                    console.log('end of the block')
                }
            }
            )
    })

})

console.log('starting new block')





