let express = require('express');
let path = require('path');

let app = express();
``
//开发环境
app.use('/dev', express.static(__dirname + '/views'));
app.use('/dev/public', express.static(__dirname + '/public'));

//部署环境
app.use('/', express.static(__dirname + '/dist/views'));
app.use('/public', express.static(__dirname + '/dist/public'));

app.listen(16087, () => {
  console.log('server start at 16087');
})

module.exports = app;
