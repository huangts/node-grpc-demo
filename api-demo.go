package main

import (
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"v2ray.com/core/app/proxyman/command"
	"v2ray.com/core/common/protocol"
	"v2ray.com/core/common/serial"
	"v2ray.com/core/proxy/vmess"
)

const (
	API_ADDRESS = "127.0.0.1"
	API_PORT    = 10085
	INBOUND_TAG = "proxy"
	LEVEL       = 0
	EMAIL       = "123@gmail.com"
	UUID        = "2601070b-ab53-4352-a290-1d44414581ee"
	ALTERID     = 32
)

func addUser(c command.HandlerServiceClient) {
	resp, err := c.AlterInbound(context.Background(), &command.AlterInboundRequest{
		Tag: INBOUND_TAG,
		Operation: serial.ToTypedMessage(&command.AddUserOperation{
			User: &protocol.User{
				Level: LEVEL,
				Email: EMAIL,
				Account: serial.ToTypedMessage(&vmess.Account{
					Id:               UUID,
					AlterId:          ALTERID,
					SecuritySettings: &protocol.SecurityConfig{Type: protocol.SecurityType_AUTO},
				}),
			},
		}),
	})
	if err != nil {
		log.Printf("failed to call grpc command: %v", err)
	} else {
		log.Printf("ok: %v", resp)
	}
}
func removeUser(c command.HandlerServiceClient) {
	resp, err := c.AlterInbound(context.Background(), &command.AlterInboundRequest{
		Tag: INBOUND_TAG,
		Operation: serial.ToTypedMessage(&command.RemoveUserOperation{
			Email: EMAIL,
		}),
	})
	if err != nil {
		log.Printf("failed to call grpc command: %v", err)
	} else {
		log.Printf("ok: %v", resp)
	}
}
func main() {
	cmdConn, err := grpc.Dial(fmt.Sprintf("%s:%d", API_ADDRESS, API_PORT), grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	hsClient := command.NewHandlerServiceClient(cmdConn)
	addUser(hsClient)
	// removeUser(hsClient)
}
