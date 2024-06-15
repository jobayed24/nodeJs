const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const getCwb=(filename)=>path.join(__dirname,filename)
//one directory up 

const path1=__dirname+"\\..";
fs.realpath(path1,(err,resolvePath)=>{
    if(err) throw err.message;
    console.log('new resolvePath',resolvePath);
})