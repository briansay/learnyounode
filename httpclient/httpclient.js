//First Pass
// let http = require('http');
// let url = process.argv[2];
//
//
// http.get(url, (response) => {
//   response.setEncoding('utf-8');
//   response.on('data', (data)=>{
//     console.log(data);
//   })
// });

//Official Answer
var http = require('http')

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})//.on('error', console.error)
