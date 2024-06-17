const http=require('node:http');
const path=require('node:path');
const fs=require('node:fs');
const os=require('node:os');
let increament=0;
let server=http.createServer((req,res)=>{
increament++;
    
let data=new Buffer.from(`${increament} Jobayed hossen is here \n`);

fs.open(path.join(__dirname,'text.txt'),'a+',(err,fd)=>{
    if(err) throw err;
    fs.write(fd,data,(err,writedBytes)=>{
        if(err) console.log("can't possible to write data on this file");
        console.log('total bytes',writedBytes);
        
    })
   fs.readFile(path.join(__dirname,'text.txt'),{encoding:'utf8'},(err,resData)=>{
    if(err) res.end(err.message);

    res.end('<h1>This is jobayed Hossen</h1>');
   })
})
}

).listen(3000,()=>console.log('server started'));

