const express = require('express')
const app = express()
const routes = require('./routes/api');

app.use('/', routes);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

module.exports = app;
