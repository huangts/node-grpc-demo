// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var v2ray_com_core_app_proxyman_command_command_pb = require('../../../../../v2ray.com/core/app/proxyman/command/command_pb.js');
var v2ray_com_core_common_protocol_user_pb = require('../../../../../v2ray.com/core/common/protocol/user_pb.js');
var v2ray_com_core_common_serial_typed_message_pb = require('../../../../../v2ray.com/core/common/serial/typed_message_pb.js');
var v2ray_com_core_config_pb = require('../../../../../v2ray.com/core/config_pb.js');

function serialize_v2ray_core_app_proxyman_command_AddInboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AddInboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AddInboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AddInboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AddInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AddInboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AddInboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AddInboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AddInboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AddInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AddOutboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AddOutboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AddOutboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AddOutboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AddOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AddOutboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AddOutboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AddOutboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AddOutboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AddOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AlterInboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AlterInboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AlterInboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AlterInboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AlterInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AlterInboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AlterInboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AlterInboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AlterInboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AlterInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AlterOutboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AlterOutboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AlterOutboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_AlterOutboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.AlterOutboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_AlterOutboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_RemoveInboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.RemoveInboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_RemoveInboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_RemoveInboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.RemoveInboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_RemoveInboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_RemoveOutboundRequest(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundRequest)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.RemoveOutboundRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_RemoveOutboundRequest(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2ray_core_app_proxyman_command_RemoveOutboundResponse(arg) {
  if (!(arg instanceof v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundResponse)) {
    throw new Error('Expected argument of type v2ray.core.app.proxyman.command.RemoveOutboundResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_v2ray_core_app_proxyman_command_RemoveOutboundResponse(buffer_arg) {
  return v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HandlerServiceService = exports.HandlerServiceService = {
  addInbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/AddInbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.AddInboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.AddInboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_AddInboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_AddInboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_AddInboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_AddInboundResponse,
  },
  removeInbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/RemoveInbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.RemoveInboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_RemoveInboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_RemoveInboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_RemoveInboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_RemoveInboundResponse,
  },
  alterInbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/AlterInbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.AlterInboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.AlterInboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_AlterInboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_AlterInboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_AlterInboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_AlterInboundResponse,
  },
  addOutbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/AddOutbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.AddOutboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.AddOutboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_AddOutboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_AddOutboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_AddOutboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_AddOutboundResponse,
  },
  removeOutbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/RemoveOutbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.RemoveOutboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_RemoveOutboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_RemoveOutboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_RemoveOutboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_RemoveOutboundResponse,
  },
  alterOutbound: {
    path: '/v2ray.core.app.proxyman.command.HandlerService/AlterOutbound',
    requestStream: false,
    responseStream: false,
    requestType: v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundRequest,
    responseType: v2ray_com_core_app_proxyman_command_command_pb.AlterOutboundResponse,
    requestSerialize: serialize_v2ray_core_app_proxyman_command_AlterOutboundRequest,
    requestDeserialize: deserialize_v2ray_core_app_proxyman_command_AlterOutboundRequest,
    responseSerialize: serialize_v2ray_core_app_proxyman_command_AlterOutboundResponse,
    responseDeserialize: deserialize_v2ray_core_app_proxyman_command_AlterOutboundResponse,
  },
};

exports.HandlerServiceClient = grpc.makeGenericClientConstructor(HandlerServiceService);
