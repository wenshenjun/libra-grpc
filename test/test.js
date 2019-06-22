const libra = require('..');
const bluebird = require('bluebird');

bluebird.promisifyAll(libra.Client.prototype);
const client = new libra.Client('ac.testnet.libra.org:8000');

const test = async () => {
  /** Get account state */
  const address ='435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4';
  const accountState = await client.requestAsync('get_account_state', { address: Buffer.from(address, 'hex') });
  console.log('Account state', accountState);

  /** Get transactions */
  const params = {
    start_version: 1,
    limit: 10,
    fetch_events: true
  };
  const transactions = await client.requestAsync('get_transactions', params);
  console.log('Transactions', transactions);
};

test();
