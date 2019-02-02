
//First Pass
// let fs = require('fs');
//
// let directory = process.argv[2];
// let extension = '.' + process.argv[3];
// let answer = "";
//
// fs.readdir(directory, (err, list) => {
//   if (err){return console.log(err)};
//   for (let i=0; i<list.length; i++){
//     if (list[i].indexOf(extension)>=0){
//       answer += list[i] + '\n';
//     }
//   }
//   console.log(answer);
//
// });

//Second Pass
// let fs = require('fs');
//
// let directory = process.argv[2];
// let extension = '.' + process.argv[3];
//
// fs.readdir(directory, (err, list) => {
//   if (err){return console.log(err)};
//   for (let i=0; i<list.length; i++){
//     if (list[i].indexOf(extension)>=0){
//       console.log(list[i]);
//     }
//   }
//   console.log(answer);
//
// });


//Third Pass
let fs = require('fs')
let path = require('path')

let folder = process.argv[2]
let ext = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
  if (err) return console.error(err)
  files.forEach( (file)=> {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
