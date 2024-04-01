const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file'); // 로그파일 일자별로 생성
const appRoot = require('app-root-path'); // app root 경로를 가져오는 lib
const process = require('process');

const logDir = '${appRoot}/logs'; // logs 디렉토리 하위에 로그 파일 저장

const{
    combine,
    timestamp,
    label,
    printf
} = winston.format;

const logFormat = printf(({
    level,
    message,
    label,
    timestamp
}) => {
    return '${timestamp} [${label}] ${level}: ${message}'; // log 출력 포맷 정의
});

/*
* log level
* error : 0 warn : 1 info 2 http: 3 verbose 4 debug 5 silly 6
*/

const logger = winston.createLogger({
    format: combine (
        label({
            label: 'LogTestSystem'
        }),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat // 로그 출력 포맷
    ),
    transports: [
        // info 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: '%DATE%.log',
            maxFiles: 30, // 30일치 로그 파일 저장
            zippedArchive: true
        }),

        // error 레벨 로그 저장할 파일 설정
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: '%DATE%.error.log',
            maxFiles: 30,
            zippedArchive: true
        })
    ],
    ExceptionHandler: [
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: '%DATE%.exception.log',
            maxFiles: 30,
            zippedArchive: true
        })
    ]
});

// Production 환경 아닌 경우 콘솔로 출력
if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(), // 색 넣어서 출력
            winston.format.simple(),
        )
    }));

}

module.exports = logger;