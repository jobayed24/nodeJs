const http=require('node:http')

const hostname='127.0.0.1'
const port=3000;
const server=http.createServer((req,res)=>{
    res.end('this is node server !')
})

server.listen(port,hostname,()=>{console.log('server started')})