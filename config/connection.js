const { connect, connection } = require('mongoose');

console.log("inside connection.js");
connect('mongodb://127.0.0.1:27017/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;