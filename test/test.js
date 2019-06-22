const libra = require('..');
const bluebird = require('bluebird');

bluebird.promisifyAll(libra.Client.prototype);
const client = new libra.Client('ac.testnet.libra.org:8000');

const test = async () => {
  /** Get account state */
  let params = {
    address: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex'),
  };
  const accountState = await client.requestAsync('get_account_state', params);
  console.log('Account state', accountState);

  /** Get transactions */
  params = {
    start_version: 1,
    limit: 10,
    fetch_events: true,
  };
  const transactions = await client.requestAsync('get_transactions', params);
  console.log('Transactions', transactions);

  /** Get events */
  params = {
    access_path: {
      address: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex'),
    },
    start_event_seq_num: 2,
    ascending: true,
    limit: 10,
  };
  const events = await client.requestAsync('get_events_by_event_access_path', params);
  console.log('Events', events);
};

test();
