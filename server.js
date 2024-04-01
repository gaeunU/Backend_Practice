const express = require('express');
const app = express();

const server = app.listen(3000,() =>{
    console.log('Start Server: localhost:3000');
});

// DB 정보
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

app.set('wiews',__dirname + '/views');

// embeded javascript template
// html 안에서 자바스크립트를 같이 사용하도록 해주는 템플릿
app.set('view engine','ejs'); 
app.engine('html', require('ejs').renderFile);

// 라우터
app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/about', function (req, res) {
    res.render('about.html')
})

app.get('/db', function(req, res)){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        res.send(JSON.stringify(results));
        console.log('results',results);
        // Use the connection
        // 모든 데이터를 가져와라 Test 테이블에서
        connection.query('select * from Test', function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
}