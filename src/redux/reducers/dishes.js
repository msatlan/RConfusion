import { actions } from 'react-redux-form';
import { DISHES } from '../../common/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
