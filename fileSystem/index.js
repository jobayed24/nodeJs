const fs=require('node:fs');
const path=require('node:path');


fs.mkdir(path.join(__dirname,'jk'),{recursive:true},(err)=>{
    if(err) throw err;
    console.log('folder created successfully')
})
