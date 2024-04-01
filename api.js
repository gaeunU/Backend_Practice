const express = require('express');
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001,() =>{
    console.log('start Server : localhost:3001');   
});

// console.log(uuidAPIKey.create());

const key = {
    apiKey: '8SAEPY0-QR6M76B-K7W9P14-0TRWDC7',
    uuid: '4654eb78-be0d-4399-99f8-9b0406b1c6b0'
};

// api/users/~에 접속한다.
// 콜론이 있는 패스에는 어떤 값이던 들어온다.
app.get('/api/users/:apiKey/:type', async(req, res) => {
    // 사용자가 호출할 때 보낸 파라미터를 받을 수 있다.
    // 나는 /api/users/1 을 보냈으니 
    // 민약 console.log(type); 하면 콘솔에는 1이 찍힘
    let {
        type
    } = req.params;

    // 유효한 api 키의 사용자인지 확인
    // 아니라면 정보 제공을 하지 않는다.
    if(uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apiKey, key.uuid)){
        res.send('apikey is not valid');
    }
    
    if(type == 'Suwon'){
        let data=[
            {name:"옹시은", city:"Suwon"},
            {name:"옹예주", city:"Suwon"}
        ];
        res.send(data);
    }else if(type =='wonju'){
        let data=[
            {name:"왕은비", city:"wonju"},
            {name:"왕감자", city:"wonju"}
        ]
    }else if(type =='Seoungnam'){
        let data=[
            {name:"유가은", city:"Seoungnam"},
            {name:"유공주", city:"Seoungnam"}
        ]
    }else{
        res.send('Type is not correct.');
    }
    console.log(type);
    res.send('ok');
    //res.send('connect');
});

app.get('/api/sales/:apiKey/:type', async(req, res) => {
    // 사용자가 호출할 때 보낸 파라미터를 받을 수 있다.
    // 나는 /api/users/1 을 보냈으니 
    // 민약 console.log(type); 하면 콘솔에는 1이 찍힘
    let {
        type
    } = req.params;

    if(uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apiKey, key.uuid)){
        res.send('apikey is not valid');
    }
    
    if(type == '2019'){
        let data=[
            {product:"반도체", amount:"333032"}
        ];
        res.send(data);
    }else if(type =='2020'){
        let data=[
            {product:"냉장고", amount:"3452"}
           
        ]
    }else if(type =='2021'){
        let data=[
            {product:"냉장고", amount:"9093"}
           
        ]
    }else{
        res.send('Type is not correct.');
    }
    console.log(type);
    res.send('ok');
    //res.send('connect');
});