var express = require('express');
var path = require('path');
var sql = require("mssql");

var app = express();

const config = {
  user: 'mydas.manager',
  password: 'Digital@2018',
  server: 'mydasmanager.database.windows.net',
  database: 'mydas-manager',
  options: {
    encrypt: true
  }
}

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(request, response) {
  sql.close()
  sql.connect(config, function (err) {
  
    if (err) {
      console.error(err);
      return
    }

    let request = new sql.Request();
        
    request.query('select * from dbo.Random', function (err, dbresponse) {
        
      if (err) {
        console.error(err);
        return
      }

      const value_map = Array.from(dbresponse.recordset.map(i => i.value))

      response.send(value_map);
    });
  });
})

app.get('/ram', function(request, response) {
  sql.close()
  sql.connect(config, function (err) {
    if (err) {
      console.error(err);
      return
    }

    let requestRam = new sql.Request();

    requestRam.query('SELECT * FROM dbo.Ram', function (err, dbresponse) {

      if (err) {
        console.error(err);
        return
      }
      
      const value_ram = Array.from(dbresponse.recordset.map(i => i.memoryuse))

      response.send(value_ram);
    })
  })
})

app.listen(3000);