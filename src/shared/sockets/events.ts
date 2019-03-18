import { store, ADD_PROJECTS } from '../store';

export const events: SocketEvent[] = [
  {
    name: 'projects',
    handler: function(data) {
      store.dispatch(ADD_PROJECTS, data);
    }
  }
];
