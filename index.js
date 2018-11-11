'use strict';

var express = require('express');
var path = require('path');
var sql = require("mssql");

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(request, response) {

  const config = {
    user: 'mydas.manager',
    password: 'Digital@2018',
    server: 'mydasmanager.database.windows.net',
    database: 'mydas-manager',
    options: {
      encrypt: true
    }
  }

  sql.close()
  sql.connect(config, function (err) {
  
    if (err) console.log(err);

    let request = new sql.Request();
        
    request.query('select * from dbo.Random', function (err, recordset) {
        
      if (err) console.log(err)
      const value_map = Array.from(recordset.recordset.map(i => i.value))

      response.send(value_map);
        
    });
  });
})
app.listen(3000);