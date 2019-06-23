'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var grpc = _interopDefault(require('grpc'));
var protoLoader = _interopDefault(require('@grpc/proto-loader'));
var transaction_pb = require('./pb/transaction_pb');

const PROTO_PATH = path.resolve(__dirname, './pb/admission_control.proto');

class Client {
  constructor(address) {
    this.address = address;
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: Number,
      enums: String,
      defaults: true,
      bytes: String,
      oneofs: true,
    });
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    this.client = new protoDescriptor.admission_control.AdmissionControl(this.address, grpc.credentials.createInsecure());
  }

  request(command, params, cb) {
    const request = {};
    request[`${command}_request`] = params;
    const promise = new Promise((resolve, reject) => {
      this.client.updateToLatestLedger({
        client_known_version: 0,
        requested_items: [request],
      }, (error, response) => {
        const result = error ? null : response.response_items[0][`${command}_response`];
        if (error) return reject(error);
        return resolve(result);
      });
    });
    if (!cb) return promise;
    return promise
      .then(res => cb(null, res))
      .catch(err => cb(err, null));
  }
}

function deserializeRawTxnBytes(rawTxnBytes) {
  const rawTx = transaction_pb.RawTransaction.deserializeBinary(rawTxnBytes);
  return rawTx.toObject();
}

var utils = {
  deserializeRawTxnBytes,
};

var version = "0.0.3";

exports.Client = Client;
exports.utils = utils;
exports.version = version;
