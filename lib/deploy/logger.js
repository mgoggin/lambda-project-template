'use strict';

const chalk = require('chalk');
const loglevel = require('loglevel');
const logPrefix = require('loglevel-plugin-prefix');

const colors = {
  'TRACE': chalk.cyanBright,
  'DEBUG': chalk.magentaBright,
  'INFO': chalk.blueBright,
  'WARN': chalk.yellow,
  'ERROR': chalk.red,
};

logPrefix.reg(loglevel);

const logger = loglevel.getLogger('deploy-lambda');

logger.setDefaultLevel(process.env['DEBUG'] != null ? 'debug' : 'info');

logPrefix.apply(logger, {
  levelFormatter(level) { return level.toUpperCase(); },
  timestampFormatter(date) { return date.toISOString(); },
  format(level, name, timestamp) {
    return [
      `${chalk.gray(`[${timestamp}]`)}`,
      `${chalk.green(`${name}`)}`,
      `${colors[level](`${level.padStart(5)}`)}`
    ].join(' | ') + ' | ';
  }
});

module.exports = exports = logger;
