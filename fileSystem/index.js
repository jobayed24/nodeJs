const fs=require('node:fs');


fs.mkdir('./test/po',{recursive: true},(err)=>{
    if(err) throw err;
    console.log('file created successfully');
})