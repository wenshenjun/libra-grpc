import { RawTransaction } from './pb/transaction_pb';

function deserializeRawTxnBytes(rawTxnBytes) {
  const rawTx = RawTransaction.deserializeBinary(rawTxnBytes);
  return rawTx.toObject();
}

export default {
  deserializeRawTxnBytes,
}
