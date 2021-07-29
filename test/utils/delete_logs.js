const fs = require('fs-extra');
const path = require('path');

const logFilePath = path.resolve(`${__dirname}/../../atm-%DATE%.log`);
fs.removeSync(logFilePath);