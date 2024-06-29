const fs=require('node:fs');
const path=require('node:path');
//define path
const configFolder=path.join(__dirname,'config');
const configFile=path.join(configFolder,'config.txt');


//create the directory

fs.mkdir(configFolder,{recursive: true},(err)=>{
  if(err) throw err;
  console.log('Folder created successfully');
});


// write data on file

fs.writeFile(configFile,'a new data added to the file',(err)=>{
  if(err) throw err;
  console.log('write in the file successfully');
});

// Read file concurrenty

fs.readFile(configFile,{encoding: 'utf8'},(err,data)=>{
  if(err) throw err;
  console.log('File data:-',data);
})

