import * as ActionTypes from '../ActionTypes';

export const Leaders = (
    state = {
        isLoading: true,
        err: null,
        leaders: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, leaders: action.payload };
        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, leaders: [] };
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, leaders: [] };
        default:
            return state;
    }
};
