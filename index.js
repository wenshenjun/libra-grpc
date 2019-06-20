const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/node_debug_interface.proto'; // Taken from https://github.com/libra/libra/blob/master/common/debug_interface/src/proto/node_debug_interface.proto

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const debugProto = grpc.loadPackageDefinition(packageDefinition).debug;

const client = new debugProto.NodeDebugInterface('ac.testnet.libra.org:80', grpc.credentials.createInsecure());

client.GetNodeDetails(null, function(err, response) {
  console.log('Greeting:', err, response);
});
