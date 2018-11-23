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

sql.close()
sql.connect(config, function (err) {
  if (err) {
    console.error(err);
    return
  }
})

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/cpu', function(request, response) {
  let requestCpu = new sql.Request();
      
  requestCpu.query('SELECT value FROM dbo.Random', function (err, dbresponse) {
      
    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  });
})

app.get('/ram', function(request, response) {
  let requestRam = new sql.Request();

  requestRam.query('SELECT value FROM dbo.Random', function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/gpu', function(request, response) {
  let requestGpu = new sql.Request();

  requestGpu.query('SELECT value FROM dbo.Random', function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/hd', function(request, response) {
  let requestHd = new sql.Request();

  requestHd.query('SELECT value FROM dbo.Random', function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/correlation', function(request, response) {
  let requestCorrelation = new sql.Request();

  requestCorrelation.query('SELECT value FROM dbo.Random', function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.listen(3000);