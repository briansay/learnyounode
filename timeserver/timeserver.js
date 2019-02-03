//listen on tcp connection for first argument provided

//"YYYY-MM-DD hh:mm\n"

let net = require('net');
let port = process.argv[2];
let date = new Date();
let year = date.getFullYear();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());
let formattedDate = year+"-"+month+"-"+monthDate+" "+hours+":"+minutes+"\n";

function zeroCheck(item){
  if (item<10) return '0'+item.toString();
  return item.toString();
}

let server = net.createServer((socket)=>{
  socket.end(formattedDate);


})
server.listen(port);
