import { store } from './';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
