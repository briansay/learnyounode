//First Pass

let http = require("http");
let info = [];

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on("data", (input) => {
        info.push(input);
    });
    res.on("error",console.error);
    res.on("end", () => {
        console.log(info.join("").length);
        console.log(info.join(""));
    });
});




//Official Answer
// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
