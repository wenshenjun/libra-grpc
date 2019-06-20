const { grpc } = require('@improbable-eng/grpc-web');
const { NodeHttpTransport } = require('@improbable-eng/grpc-web-node-http-transport');

grpc.setDefaultTransport(NodeHttpTransport());

const { NodeDebugInterfaceClient } = require('./generated/node_debug_interface_pb_service');
const { GetNodeDetailsRequest } = require('./generated/node_debug_interface_pb');

const client = new NodeDebugInterfaceClient('ac.testnet.libra.org:80', null, null);

let getRequest = new GetNodeDetailsRequest();
client.getNodeDetails(getRequest, {}, (err, response) => {
  console.log(err, response);
});
