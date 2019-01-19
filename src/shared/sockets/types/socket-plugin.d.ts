interface SocketPlugin {
  sendSocket(eventName: string, data: any): void;
  subscribeToChannel(channel: string, callback: any): void;
  unsubscribeFromChannel(channel: string): void;
}
