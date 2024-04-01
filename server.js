const express = require('express');
const app = express();

const server = app.listen(3000,() =>{
    console.log('Start Server: localhost:3000');
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