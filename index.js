const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(__dirname, './proto/admission_control.proto');
const SERVER_URI = 'ac.testnet.libra.org:8000';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const client = new protoDescriptor.admission_control.AdmissionControl(SERVER_URI, grpc.credentials.createInsecure());

client.updateToLatestLedger({
  client_known_version: 0,
}, (err, response) => {
  console.log('Result', err, response);
});
