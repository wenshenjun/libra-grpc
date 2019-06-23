/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.types.TransactionInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.types.TransactionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.types.TransactionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.types.TransactionInfo.displayName = 'proto.types.TransactionInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.types.TransactionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.types.TransactionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.types.TransactionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.types.TransactionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedTransactionHash: msg.getSignedTransactionHash_asB64(),
    stateRootHash: msg.getStateRootHash_asB64(),
    eventRootHash: msg.getEventRootHash_asB64(),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.types.TransactionInfo}
 */
proto.types.TransactionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.types.TransactionInfo;
  return proto.types.TransactionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.types.TransactionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.types.TransactionInfo}
 */
proto.types.TransactionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignedTransactionHash(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStateRootHash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEventRootHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasUsed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.types.TransactionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.types.TransactionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.types.TransactionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.types.TransactionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedTransactionHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStateRootHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEventRootHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getGasUsed();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional bytes signed_transaction_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.types.TransactionInfo.prototype.getSignedTransactionHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signed_transaction_hash = 1;
 * This is a type-conversion wrapper around `getSignedTransactionHash()`
 * @return {string}
 */
proto.types.TransactionInfo.prototype.getSignedTransactionHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignedTransactionHash()));
};


/**
 * optional bytes signed_transaction_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignedTransactionHash()`
 * @return {!Uint8Array}
 */
proto.types.TransactionInfo.prototype.getSignedTransactionHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignedTransactionHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.TransactionInfo.prototype.setSignedTransactionHash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes state_root_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.types.TransactionInfo.prototype.getStateRootHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes state_root_hash = 2;
 * This is a type-conversion wrapper around `getStateRootHash()`
 * @return {string}
 */
proto.types.TransactionInfo.prototype.getStateRootHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStateRootHash()));
};


/**
 * optional bytes state_root_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStateRootHash()`
 * @return {!Uint8Array}
 */
proto.types.TransactionInfo.prototype.getStateRootHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStateRootHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.TransactionInfo.prototype.setStateRootHash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes event_root_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.types.TransactionInfo.prototype.getEventRootHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes event_root_hash = 3;
 * This is a type-conversion wrapper around `getEventRootHash()`
 * @return {string}
 */
proto.types.TransactionInfo.prototype.getEventRootHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEventRootHash()));
};


/**
 * optional bytes event_root_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEventRootHash()`
 * @return {!Uint8Array}
 */
proto.types.TransactionInfo.prototype.getEventRootHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEventRootHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.TransactionInfo.prototype.setEventRootHash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 gas_used = 4;
 * @return {number}
 */
proto.types.TransactionInfo.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.types.TransactionInfo.prototype.setGasUsed = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.types);
