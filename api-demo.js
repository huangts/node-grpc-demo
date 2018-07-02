var grpc = require('grpc')

var services = require('./v2ray.com/core/app/proxyman/command/command_grpc_pb')
var command = require('./v2ray.com/core/app/proxyman/command/command_pb')
var protocol_user = require('./v2ray.com/core/common/protocol/user_pb')
var protocol_headers = require('./v2ray.com/core/common/protocol/headers_pb')
var serial = require('./v2ray.com/core/common/serial/typed_message_pb')
var vmess = require('./v2ray.com/core/proxy/vmess/account_pb')

var hsClient = new services.HandlerServiceClient('127.0.0.1:10085', grpc.credentials.createInsecure())

var vAccount = new serial.TypedMessage(new vmess.Account({
    Id: '4c5630a1-0a09-987f-3f04-58f7bbfc2773',
    AlterId: 32,
    SecuritySettings: new protocol_headers.SecurityConfig({
        Type: protocol_headers.SecurityType.AUTO
    })
}))

hsClient.AlterInbound(new command.AlterInboundRequest({
    Tag: 'proxy',
    Operation: new serial.TypedMessage(new command.AddUserOperation({
        User: new protocol_user.User({
            Level: 0,
            Email: 't@t.tt',
            Account: vAccount
        })
    }))
}), function(err, resp){
    if (err) {
        return
    }
    console.log('Response:', resp.getMessage());
})