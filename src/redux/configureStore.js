import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './reducers/dishes';
import { Comments } from './reducers/comments';
import { Promotions } from './reducers/promotions';
import { Leaders } from './reducers/leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms/forms';

// Store holds the current state values
// created with createStore() Redux' method
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
