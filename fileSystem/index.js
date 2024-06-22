const http=require('node:http');
const path=require('node:path');
const fs=require('node:fs');
const os=require('node:os');
const readline=require('node:readline');

const directoryPath='./';

function listFileAndTypes(dirPath){
    fs.readdir(dirPath,(err,files)=>{
        if(err) throw err;
        files.forEach((file)=>{
            fs.lstat(file,(err,fileStat)=>{
                if(err) {
                    console.log('there was an err with the files');
                    return;
                }
                if(fileStat.isFile()){
                    console.log(`${file} -Files`);
                }
                if(fileStat.isDirectory()){
                    console.log(`${file}- Dir`);
                }
                if(fileStat.isSymbolicLink()){
                    console.log(`${file}- Symbolic`)
                }
            })
        })
    })
}


listFileAndTypes(directoryPath);








