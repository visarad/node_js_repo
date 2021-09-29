const http = require('http')
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('this is the base url')
    }
    else if (req.url === '/main'){
        res.end('this is the main url')
    }
    else {
    res.end(`   
        <h1>oops </h1>
        <h2> this is not what you are looking for </h2>
        <a href='/'> back home </a>
    `)
    }

})

server.listen(5000)