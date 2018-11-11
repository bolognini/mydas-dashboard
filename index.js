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

  // config for your database
  const config = {
    user: 'mydas.manager',
    password: 'Digital@2018',
    server: 'mydasmanager.database.windows.net',
    database: 'mydas-manager', //update me
    options: {
      encrypt: true
    }
  }

  // connect to your database
  sql.close()
  sql.connect(config, function (err) {
  
    if (err) console.log(err);

    // create Request object
    let request = new sql.Request();
        
    // query to the database and get the records
    request.query('select * from dbo.Random', function (err, recordset) {
        
      if (err) console.log(err)
      const value_map = Array.from(recordset.recordset.map(i => i.value))

      // send records as a response
      response.send(value_map);
        
    });
  });
})

// Create connection to database
// var config = {
//   userName: 'mydas.manager',
//   password: 'Digital@2018',
//   server: 'mydasmanager.database.windows.net',
//   options: {
//     database: 'mydas-manager' //update me
//     , encrypt: true
//   }
// }
// var connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// // connection.on('connect', function(err) {
// //   if (err) {
// //     console.log(err)
// //     return 
// //   } 
// //   queryDatabase()
// // });

// function queryDatabase() { 
//   console.log('Reading rows from the Table...');

//   // Read all rows from table
//   var request = new Request( "SELECT * FROM Random",
//     function(err, rowCount, rows) {
//       if(err) {
//         throw new Error(err)
//       }

//       // console.log(rowCount + ' row(s) returned');
//       // console.log(rows);
//       // process.exit();
//     }
//   );

//   let data = ['teste']

//   request.on('row', function(columns) {
//     console.log(columns.map(i => i.value))
//     data = columns.map(i => i.value)
//     // columns.forEach(function(column) {
//     //     console.log("%s\t%s", column.metadata.colName, column.value);
//     // });
//     // console.log(teste);
//   });
//   connection.execSql(request);

//   return data
// }

app.listen(3000);