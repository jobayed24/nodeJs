const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const getCwb=(filename)=>path.join(__dirname,filename)

fs.open(getCwb('test1.txt'),'a+',(err,data)=>{
    if(err) throw err.message;
    if(data){
       try{
        fs.appendFile(data,'jobayed hossen\n','utf-8',(er)=>{
            fs.close(data);
            if(er) throw er;
            
        })
       }catch(err){
        fs.close(data)
        console.log(err)
       }
    }
})

