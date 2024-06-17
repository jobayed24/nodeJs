const http=require('node:http');
const path=require('node:path');
const fs=require('node:fs');
const os=require('node:os');


let bufferData=new Buffer.from('This is jobayed hossen\n');

fs.open(path.join(__dirname,"test1.txt"),'a',(err,fd)=>{
    if(err) throw err;
    console.log('fileDir',fd);
    fs.write(fd,bufferData,(err,writesBytes)=>{
        if(err) console.log("can't write to the file");
        console.log('writes bytes',writesBytes);

    })
})

