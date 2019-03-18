interface SocketEvent {
  name: string;
  handler(data: any): any;
}