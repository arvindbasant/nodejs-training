// import fs from 'fs';
// import path from 'path';

// // gets file in buffer
// fs.readFile(path.resolve('tmp', 'hello.txt'), { encoding: 'utf-8' }, (err, content) => {
//   if (err)
//     return console.error(err);
//   console.log(content);
// });

// fs.readFile(path.resolve('tmp', 'hello.txt'), (err, content) => {
//   if (err)
//     return console.error(err);
//   console.log(content.toString('hex'));
// });

// some small file -> config files(json)
// fs.readFileSync -> load entire file into main memory

// read a file line by line -> it will be slower
// O(n) -> n => no of lines


// import readline from 'readline';
// import fs from 'fs';
// import path from 'path';

// let lineCount = 0;

// const rl = readline.createInterface({
//   input: fs.createReadStream(path.resolve('tmp', 'hello.txt')),
//   output: process.stdout, // write into another file or just ignore
//   terminal: false
// });

// rl.on('line', (line) => {
//   lineCount++;
//   console.log(line);
// });

// get filestat -> size of file -> buffer length -> split into n files

// getting data as buffer -> buffer will have 3 and 1/2 line -> split by binary code of /n(XXXX) -> [] -> last 1/2 line temp variable -> for next buffer 1/2 line + new buffer

// Design Patterns
/*
*State
*Proxy, builder, bridge, factory, abstract factory, adapter
*/
// Domain Driven Design

// DB layer -> repository/ identitymap / mapper / unit of work

// CLRF or LF

import fs from 'fs';

const readable = fs.createReadStream('path', {
  encoding: 'utf-8',
  highWaterMark: 10 * 1024,
});

const writable = fs.createWriteStream('path to write');

readable.on('data', (chunk) => {
  writable.write(chunk);
})


// STREAM

import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
  let stream  = fs.createReadStream('path');
  stream.pipe(res);
}).listen(5678);


const readable = fs.createReadStream('file1.txt');
const writable = fs.createWriteStream('file2.txt');
readable.pipe(writable);

import zlib from 'zlib';
fs.createReadStream('file-path')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('destination-file.gz'))


