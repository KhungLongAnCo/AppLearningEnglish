// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000', 'http://localhost:4000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
module.exports = corsOptions;