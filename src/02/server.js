const http = require('node:http');
const ReplaceStream = require('./index')

const server = http.Server();

server.on('request', (req,res)=>{
    const url = new URL(req.url, 'http://localhost:3007')
    const replacer = new ReplaceStream({
        from: url.searchParams.get('from'),
        to: url.searchParams.get('to')
    })
    // req.on('data', chunk =>{
    //     replacer.write(chunk)
    // })
    // replacer.on('data', chunk=>{
    //     res.write(chunk)
    // })

    req.pipe(replacer).pipe(res)
})
server.listen(3007)