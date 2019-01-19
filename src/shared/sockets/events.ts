import { store } from '../store';

export const events: SocketEvent[] = [
  {
    name: 'projects',
    handler: function(data) {
      store.dispatch('addProjects', data);
    }
  }
];
