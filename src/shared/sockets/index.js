import Sockets from "./sockets";

export function connectToSockets() {
  Sockets.connect();
}

export const SocketsPlugin = {
  install(Vue) {
    Vue.prototype.$sendSocket = (eventName, data) => {
      return Sockets.emit(eventName, data);
    };
    Vue.prototype.$subscribeToChannel = (channel, callback) => {
      Sockets.subscribe(channel, callback);
    };
    Vue.prototype.$unsubscribeFromChannel = channel => {
      Sockets.unsubscribe(channel);
    };
  }
};
