var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: ['http://example.com', 'http://example2.com'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for only example.com.' })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

var whitelist = ['http://example1.com', 'http://example2.com']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// OPTIONS

// cors
// AXIOS/ Fetch

// front-end code
// first make an OPTIONS req -> prefight req -> 200OK
// POST -> will called