import path from 'path';
// const path = require ('path');
const morgan = require ('morgan');
const fs = require ('fs');
const rfs = require ('rotating-file-stream');

const logDirectory = process.env.PWD + '/log';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

// export the logger
module.exports = morgan('combined', {stream: accessLogStream});