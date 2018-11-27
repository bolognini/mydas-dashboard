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

let deviceId;

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
  deviceId = request.query.deviceId;
  let requestCpu = new sql.Request();
      
  requestCpu.query(`SELECT currentuse FROM dbo.Cpu WHERE deviceid = ${deviceId}`, function (err, dbresponse) {
      
    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  });
})

app.get('/ram', function(request, response) {
  deviceId = request.query.deviceId;
  let requestRam = new sql.Request();

  requestRam.query(`SELECT freememory FROM dbo.Ram WHERE deviceid = ${deviceId}`, function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/gpu', function(request, response) {
  deviceId = request.query.deviceId;
  let requestGpu = new sql.Request();

  requestGpu.query(`SELECT temperature FROM dbo.Gpu WHERE deviceid = ${deviceId}`, function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/hd', function(request, response) {
  deviceId = request.query.deviceId;
  let requestHd = new sql.Request();

  requestHd.query(`SELECT bytesread FROM dbo.Hd WHERE deviceid = ${deviceId}`, function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.get('/so', function(request, response) {
  // deviceId = request.query.deviceId;
  let requestSo = new sql.Request();

  requestSo.query(`SELECT namesystem FROM dbo.So`, function (err, dbresponse) {

    if (err) {
      console.error(err);
      return
    }

    response.send(dbresponse.recordset);
  })
})

app.use(function(request, response){
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);