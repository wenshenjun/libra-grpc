import path from 'path';
import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';

const PROTO_PATH = path.resolve(__dirname, './protos/admission_control.proto');

export default class Client {
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
    }, (error, response) => {
      const result = error ? null : response.response_items[0][`${command}_response`];
      cb(error, result);
    });
  }
}
