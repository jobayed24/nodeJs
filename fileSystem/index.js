const http=require('node:http');
const path=require('node:path');
const fs=require('node:fs');
const os=require('node:os');


const reader=fs.openSync(path.join(__dirname,'text.txt'),'r');

const dataOfFile=fs.readFileSync(reader,{encoding: 'utf8'});

console.log(dataOfFile);
