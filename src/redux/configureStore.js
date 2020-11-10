import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// Store holds the current state values
// created with createStore() Redux' method
export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState);

    return store;
};
