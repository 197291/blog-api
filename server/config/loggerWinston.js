import { createLogger, transports } from 'winston';

import config from './config';

const folder = config.root + '/log/';

const transport = {
  consoleInfo: new transports.Console({ level: 'info' }),
  errorFile: new transports.File({ filename: folder + 'error.log', level: 'error' }),
  infoFile: new transports.File({ filename: folder + 'info.log', level: 'info' })
};


const loggerW = createLogger({
  transports: [
    transport.consoleInfo,
    transport.errorFile,
    transport.infoFile
  ],
  exceptionHandlers: [
    new transports.File({ filename: folder + 'exceptions.log' })
  ]
});

export default loggerW;