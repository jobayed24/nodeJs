const fs=require('node:fs');
const path=require('node:path');
const getCwb=(filename)=>path.join(__dirname,filename)
try{
    fs.renameSync(getCwb('text.txt'),getCwb('test.txt'));

}catch(err){
    console.log(err.code)
}
getCurrenFiles();
function getCurrenFiles(){
    fs.readdirSync(path.join(__dirname)).forEach(file=>{
        console.log(file)
    })
}
