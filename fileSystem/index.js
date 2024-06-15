const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const getCwb=(filename)=>path.join(__dirname,filename)


const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'foo-'));

console.log(tmp);
