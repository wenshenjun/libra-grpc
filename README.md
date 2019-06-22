[![npm](https://img.shields.io/npm/v/libra-grpc.svg)](https://www.npmjs.com/package/libra-grpc)
[![Join the chat](https://img.shields.io/discord/590507340399116288.svg)](https://discord.gg/XyS25F6)

# Libra gRPC

A lightweight JavaScript library for Libra

#### Node.js
To install Libra gRPC on Node.js, open your terminal and run:
```
npm install libra-grpc --save
```

### Usage
```js
var libra = require('libra-grpc');

// Init gRPC client
var client = new libra.Client('ac.testnet.libra.org:8000');

// Get account state
var params = {
  address: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex'),
};
client.request('get_account_state', params, function(err, result) {
  console.log(err, result);
});
```
[See more examples](/test/test.js)

### Promises

You can also use Libra gRPC with promises by promisifying Libra gRPC with
[bluebird](https://github.com/petkaantonov/bluebird) as in:

```js
var libra = require('libra-grpc');
bluebird.promisifyAll(libra.Client.prototype);
```

It'll add a *Async* to all libra functions (e.g. return client.requestAsync().then())
client.request('get_account_state', params, function(err, result) {
  console.log(err, result);
});
```js
// So instead of writing client.request('get_peers', null, cb); you have to write:
return client.requestAsync('get_account_state', params).then(function(result) {
  console.log(result);
});
```

### API

#### Get account state
Get the latest state for an account.

```js
var params = {
  address: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex'),
};
client.request('get_account_state', params, function(err, result) {
  console.log(err, result);
});
```

#### Get account transaction
Get the committed transaction by account and sequence number.

```js
var params = {
  account: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex'),
  sequence_number: 1,
  fetch_events: true
};
client.request('get_account_transaction_by_sequence_number', params, function(err, result) {
  console.log(err, result);
});
```

#### Get events
Get event by account and path.

```js
var params = {
  access_path: {
    address: Buffer.from('435fc8fc85510cf38a5b0cd6595cbb8fbb10aa7bb3fe9ad9820913ba867f79d4', 'hex')
  },
  start_event_seq_num: 2,
  ascending: true,
  limit: 10
};
client.request('get_events_by_event_access_path', params, function(err, result) {
  console.log(err, result);
});
```

#### Get transactions
Get the committed transaction by range

```js
var params = {
  start_version: 1,
  limit: 10,
  fetch_events: true
};
client.request('get_transactions', params, function(err, result) {
  console.log(err, result);
});
```

### Getting help

If you believe you're experiencing a bug with or want to report incorrect documentation, open an issue on our issue tracker. For a more real-time avenue of communication, check out the Discord or Telegram servers. There you'll find community members who can help answer about development questions.

* [Join us on Telegram](https://t.me/joinchat/DAQb4RSNpqEok3p-QdmaKQ)
* [Join us on Discord](https://discord.gg/XyS25F6)

## License

[MIT](LICENSE).
