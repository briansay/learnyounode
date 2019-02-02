var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {      //export function
  //callback returns (err, data) so when using it in the other file
  //we check for err, if null, then we have got data returned. But what data?
  //That is defined in this file. 


  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
