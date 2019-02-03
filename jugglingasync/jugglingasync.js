

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

//Define print results - to be called during the get function
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

//This gets called per url
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++){
  httpGet(i)
}
