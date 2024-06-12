const {unlink}= require('node:fs/promises');

(async function(path){
    try{
        await unlink(path)
        console.log(`file deleted successfully from file path ${path}`)
    }catch(err){
        console.log(`there was an error occured ${err.message}`)
    }
})('./jk.txt')