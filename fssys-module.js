const { readfilesyn,writefilesyn }= require('fs');

// reading files.
const first = readfilesyn('./content/first.txt','utf-8');
const second = readfilesyn('./content/second.txt','utf-8');

writefilesyn(
  './content/result-asyn.txt',
  `Here is the result : ${first} ${second}`,
  { flag: 'a' }
);