const moment = require("moment");
const nodemailer = require("nodemailer");

console.log("today", moment().format("YYYY-MM-DD"));
console.log("today+1", moment().add(1,"day").format("YYYY-MM-DD"));
console.log("week", moment().add(1,"week").format("YYYY-MM-DD"));
console.log("month", moment().add(1,"month").format("YYYY-MM-DD"));

const email={
    "host": "",
    "port": "",
    "secure":false,
    "auth": {
        "user":"",
        "pass":""
    }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let emaildata={
    from:'dbrkdmsyge12@naver.com',
    to:'dbrkdmsyge12@naver.com',
    subject: '테스트 메일',
    text: '메일 연습이다.'
}

send(emaildata);