import app from './server/config/express';
import config from './server/config/config';

app.listen(config.port, () => {
  console.log(`Server listen Port: ${config.port}`);
});

process.on('uncaughtException', (err) => {
  console.log('uncaughtException', err);
})