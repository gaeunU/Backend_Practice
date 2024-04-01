const express = require('express');
const app = express();

const server = app.listen(3000,() =>{
    console.log('Start Server: localhost:3000');
});

// 라우터
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('about page')
})