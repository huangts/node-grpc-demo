# readme

## 编译v2ray的grpc客户端

以下代码执行的当前目录为$GOPATH/src

```bash
pbjs -t static-module -w commonjs -o compiled.js ./v2ray.com/core/common/protocol/user.proto ./v2ray.com/core/common/serial/typed_message.proto ./v2ray.com/core/app/proxyman/command/command.proto ./v2ray.com/core/app/proxyman/config.proto ./v2ray.com/core/config.proto ./v2ray.com/core/common/net/port.proto ./v2ray.com/core/common/net/address.proto ./v2ray.com/core/transport/internet/config.proto ./v2ray.com/core/transport/config.proto
```