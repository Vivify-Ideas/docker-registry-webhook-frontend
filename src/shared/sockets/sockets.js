import io from "socket.io-client";
import { events } from "./events";

class Sockets {
  connect() {
    this.socket = io(process.env.VUE_APP_SOCKETS_URL);
    this.socket.on("connect", this.onConnect);
    this.socket.on("disconnect", this.onDisconnect);
    events.forEach(event => {
      this.socket.on(event.name, event.handler);
    });
  }

  onConnect() {}

  onDisconnect() {}

  subscribe(channel, callback) {
    this.socket.on(channel, callback);
  }

  unsubscribe(channel) {
    this.socket.removeAllListeners(channel);
  }

  emit(eventName, data) {
    this.socket.emit(eventName, data);
  }
}

let socketInstance = new Sockets();
export default socketInstance;
