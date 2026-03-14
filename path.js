/* const path=require('path');

console.log(path.sep);


const filepath=path.join('/content','test.txt');
console.log(filepath);
  
const base=path.basename(filepath);
console.log(base);


const abs=path.resolve(__dirname,'content','test.txt');
console.log(abs);
 */
const {readFileSync,writeFileSync}=require('fs');
console.log('start');

const first=readFileSync('./content/first.txt','utf8')
const sec=readFileSync('./content/sec.txt','utf8')

console.log(first,sec);

writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first},${sec}`,
    {flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one');



//These are all synchronous approaches
