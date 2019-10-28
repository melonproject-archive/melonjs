const ganache = require('ganache-core');

module.exports = () => {
  global.__GANACHE__ = ganache.server();
  global.__GANACHE__.listen(process.env.GANACHE_PORT || 8545);
};
