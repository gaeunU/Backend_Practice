const nodemailer = require("nodemailer");

const email = {
    "host": "sandbox.smtp.mailtrap.io",
    "port": 2525,
    "secure":false,
    "auth": {
        "user":"af81acfda0f99c",
        "pass":""
    }
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info) {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from:"dbrkdmsyge12@naver.com", // 보내는
    to: "dbrkdmsyge12@naver.com", // 받는
    subject:"두번째 메일" ,// 제목
    text:"내용이다" // 내용
};

send(content);