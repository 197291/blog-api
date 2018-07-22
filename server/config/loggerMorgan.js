import path from 'path';
import  morgan from 'morgan';
import fs from 'fs';
import rfs from 'rotating-file-stream';

import config from './config';

const logDirectory = config.root + '/log';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

// export the logger
module.exports = morgan('combined', {stream: accessLogStream});