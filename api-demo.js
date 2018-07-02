var grpc = require('grpc')
var proto = require("protobufjs/minimal").proto;
var services = require('./v2ray.com/core/app/proxyman/command/command_grpc_pb')
var command = require('./v2ray.com/core/app/proxyman/command/command_pb')
var protocol_user = require('./v2ray.com/core/common/protocol/user_pb')
var protocol_headers = require('./v2ray.com/core/common/protocol/headers_pb')
var serial = require('./v2ray.com/core/common/serial/typed_message_pb')
var vmess = require('./v2ray.com/core/proxy/vmess/account_pb')

function getMessageType(msg) {
	return proto.MessageName(msg)
}

function toTypedMessage(msg) {
	if (msg == null) {
		return null
	}
    var settings = proto.Marshal(msg)
    var tmsg = new serial.TypedMessage()
    tmsg.setType(getMessageType(msg))
    tmsg.setValue(settings)
	return tmsg
}

var hsClient = new services.HandlerServiceClient('127.0.0.1:1088', grpc.credentials.createInsecure())


var securitySettings = new protocol_headers.SecurityConfig()
securitySettings.setType(protocol_headers.SecurityType.AUTO)

var v2Account = new vmess.Account()
v2Account.setId('d6f5e396-cccc-4e45-b0eb-a953105cc262')
v2Account.setAlterId(32)
v2Account.setSecuritySettings(securitySettings)
var v2AccountTypedMessage = toTypedMessage(v2Account)

var v2User = new protocol_user.User()
v2User.setLevel(1)
v2User.setEmail('tims@rayku.net')
v2User.setAccount(v2AccountTypedMessage)

var v2AddUserOperation = new command.AddUserOperation()
v2AddUserOperation.setUser(v2User)
var v2AddUserOperationTypedMessage = toTypedMessage(v2AddUserOperation)

var v2AlterInboundRequest = new command.AlterInboundRequest()
v2AlterInboundRequest.setTag('tcp')
v2AlterInboundRequest.setOperation(v2AddUserOperationTypedMessage)

hsClient.alterInbound(v2AlterInboundRequest, function(err, resp){
    if (err) {
        console.log(err)
        return
    }
    console.log('Response:', resp.getMessage());
})