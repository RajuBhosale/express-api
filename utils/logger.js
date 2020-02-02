const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: process.env.APP_NAME,
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'error',
      path: 'tmp/logs/myapp-error.log'  // log ERROR and above to a file
    }
  ]
});

module.exports = logger;