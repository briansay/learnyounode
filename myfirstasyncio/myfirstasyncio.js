
//First Pass
// let fs = require('fs');
//
// fs.readFile(process.argv[2], 'utf-8', finishedReading);
// function finishedReading(error, fileData){
//   if (error) return console.error(error);
//   console.log(fileData.split('\n').length -1 );
// }


//Second Pass
let fs = require('fs');
let filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data)=> {
  if (err){
    return console.log(error);
  }
  let lines = data.split('\n').length -1;
  console.log(lines);
});
