import * as ActionTypes from 'redux/common/ActionTypes';

export const Comments = (
    state = {
        errMess: null,
        comments: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
                isLoading: false,
                err: null,
                comments: action.payload,
            };

        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                err: action.payload,
                comments: [],
            };

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return { ...state, comments: state.comments.concat(comment) };
        default:
            return state;
    }
};
