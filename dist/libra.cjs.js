'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var grpc = _interopDefault(require('grpc'));
var protoLoader = _interopDefault(require('@grpc/proto-loader'));

const PROTO_PATH = path.resolve(__dirname, './protos/admission_control.proto');

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
    this.client.updateToLatestLedger({
      client_known_version: 0,
      requested_items: [request],
    }, (err, response) => {
      cb(err, response.response_items[0][`${command}_response`]);
    });
  }
}

exports.Client = Client;
