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

var v2ray_com_core_transport_internet_config_pb = require('../../../v2ray.com/core/transport/internet/config_pb.js');
goog.exportSymbol('proto.v2ray.core.transport.Config', null, global);

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
proto.v2ray.core.transport.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v2ray.core.transport.Config.repeatedFields_, null);
};
goog.inherits(proto.v2ray.core.transport.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.v2ray.core.transport.Config.displayName = 'proto.v2ray.core.transport.Config';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v2ray.core.transport.Config.repeatedFields_ = [1];



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
proto.v2ray.core.transport.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.v2ray.core.transport.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v2ray.core.transport.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v2ray.core.transport.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    transportSettingsList: jspb.Message.toObjectList(msg.getTransportSettingsList(),
    v2ray_com_core_transport_internet_config_pb.TransportConfig.toObject, includeInstance)
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
 * @return {!proto.v2ray.core.transport.Config}
 */
proto.v2ray.core.transport.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v2ray.core.transport.Config;
  return proto.v2ray.core.transport.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v2ray.core.transport.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v2ray.core.transport.Config}
 */
proto.v2ray.core.transport.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new v2ray_com_core_transport_internet_config_pb.TransportConfig;
      reader.readMessage(value,v2ray_com_core_transport_internet_config_pb.TransportConfig.deserializeBinaryFromReader);
      msg.addTransportSettings(value);
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
proto.v2ray.core.transport.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v2ray.core.transport.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v2ray.core.transport.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v2ray.core.transport.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransportSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      v2ray_com_core_transport_internet_config_pb.TransportConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated internet.TransportConfig transport_settings = 1;
 * @return {!Array.<!proto.v2ray.core.transport.internet.TransportConfig>}
 */
proto.v2ray.core.transport.Config.prototype.getTransportSettingsList = function() {
  return /** @type{!Array.<!proto.v2ray.core.transport.internet.TransportConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, v2ray_com_core_transport_internet_config_pb.TransportConfig, 1));
};


/** @param {!Array.<!proto.v2ray.core.transport.internet.TransportConfig>} value */
proto.v2ray.core.transport.Config.prototype.setTransportSettingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.v2ray.core.transport.internet.TransportConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.v2ray.core.transport.internet.TransportConfig}
 */
proto.v2ray.core.transport.Config.prototype.addTransportSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.v2ray.core.transport.internet.TransportConfig, opt_index);
};


proto.v2ray.core.transport.Config.prototype.clearTransportSettingsList = function() {
  this.setTransportSettingsList([]);
};


goog.object.extend(exports, proto.v2ray.core.transport);
