import Sockets from './sockets';
import { VueConstructor } from 'vue';

/**
 * Function that is exposed to the rest of the application
 * It starts the connection to the socket events
 * @function connectToSockets
 * @returns {void}
 */
export function connectToSockets(): void {
  Sockets.connect();
}

export const SocketsPlugin = {
  install(Vue: VueConstructor) {
    Vue.prototype.$sockets = {};
    Vue.prototype.$sockets.sendSocket = (eventName: string, data: any) => {
      return Sockets.emit(eventName, data);
    };
    Vue.prototype.$sockets.subscribeToChannel = (
      channel: string,
      callback: any
    ) => {
      Sockets.subscribe(channel, callback);
    };
    Vue.prototype.$sockets.unsubscribeFromChannel = (channel: string) => {
      Sockets.unsubscribe(channel);
    };
  }
};
