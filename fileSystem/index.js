const {unlink}=require('node:fs')


unlink('./text.txt',(err)=>{
   if(err) throw err;
    console.log(`successfully deleted the files`);
})

