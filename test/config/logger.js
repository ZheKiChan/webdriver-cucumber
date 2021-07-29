const winston = require('winston');
require('winston-daily-rotate-file');

let transport = new winston.transports.DailyRotateFile({
    filename: 'atm-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    dirname: './test/logs/',
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = new winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        transport
    ],
    format: winston.format.simple()
});

module.exports = logger;