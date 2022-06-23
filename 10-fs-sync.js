const { log } = require('console');
const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

//if the file doesn't exist, create it

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{ flag:'a'}        //appending to the file
)

console.log('Done with this task');
console.log('Starting the next one');