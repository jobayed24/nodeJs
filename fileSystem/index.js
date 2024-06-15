const fs=require('node:fs');
const path=require('node:path');
const getCwb=(filename)=>path.join(__dirname,filename)


fs.stat(getCwb('jk'),(err,state)=>{
    if(err) throw err.message;
    console.log(state.isFile());
})
// if(fs.existsSync(getCwb('jk'))){
//     fs.rm(getCwb('jk'),{recursive:true},(err)=>{
//         if(err) throw err;
//         console.log('deleted dir successfully');
//     })
// }


// make directory


// fs.mkdir(getCwb('jk/jk/jk'),{recursive: true},(err)=>{
//     if(err) throw err.message;
//     console.log('folder created successfully');
// })

