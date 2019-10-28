const ganache = require('ganache-core');

// Set the async timeout to 10 seconds (default 5 seconds).
jest.setTimeout(10 * 1000);

module.exports = () => {
  global.__GANACHE__ = ganache.server();
  global.__GANACHE__.listen(process.env.GANACHE_PORT || 8545);
};
