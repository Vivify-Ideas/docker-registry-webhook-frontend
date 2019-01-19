import * as io from 'socket.io-client';
import { events } from './events';

class Sockets {
  private socket: SocketIOClient.Socket;

  public connect() {
    this.socket = io(process.env.VUE_APP_SOCKETS_URL as string);
    this.socket.on('connect', this.onConnect);
    this.socket.on('disconnect', this.onDisconnect);
    events.forEach(event => {
      this.socket.on(event.name, event.handler);
    });
  }

  public onConnect() {}

  public onDisconnect() {}

  public subscribe(channel: string, callback: any) {
    this.socket.on(channel, callback);
  }

  public unsubscribe(channel: string) {
    this.socket.removeListener(channel);
  }

  public emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}

let socketInstance = new Sockets();
export default socketInstance;
