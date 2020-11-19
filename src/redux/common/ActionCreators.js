import * as ActionTypes from 'redux/common';
import { baseUrl } from 'common';
import axios from 'axios';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                let err = new Error(error.message);
                throw err;
            }
        )
        .then((response) => response.json())
        .then((response) => dispatch(addComment(response)))
        .catch((error) => {
            console.log('Post comments ', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};

export const fetchDishesAsync = () => async (dispatch) => {
    dispatch(dishesLoading(true));
    // return fetch(baseUrl + 'dishes')
    //     .then(
    //         (response) => {
    //             if (response.ok) {
    //                 return response;
    //             } else {
    //                 let error = new Error(
    //                     'Error ' + response.status + ': ' + response.statusText
    //                 );
    //                 error.response = response;
    //                 throw error;
    //             }
    //         },
    //         (error) => {
    //             let err = new Error(error.message);
    //             throw err;
    //         }
    //     )
    //     .then((response) => response.json())
    //     .then((dishes) => dispatch(addDishes(dishes)))
    //     .catch((error) => dispatch(dishesFailed(error.message)));

    try {
        let response = await axios.get(baseUrl + 'dishes');
        dispatch(addDishes(response.data));
    } catch (error) {
        dispatch(dishesFailed(error.message));
    }
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (err) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: err,
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                let err = new Error(error.message);
                throw err;
            }
        )
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (err) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: err,
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (err) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: err,
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                let err = new Error(error.message);
                throw err;
            }
        )
        .then((response) => response.json())
        .then((promos) => dispatch(addPromos(promos)))
        .catch((error) => dispatch(promosFailed(error.message)));
};

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (err) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: err,
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Error' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                let err = new Error(error.message);
                throw err;
            }
        )
        .then((response) => response.json())
        .then((leaders) => dispatch(addLeaders(leaders)))
        .catch((error) => dispatch(leadersFailed(error.message)));
};

export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = {
        ...feedback,
        date: new Date().toISOString(),
    };

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Error ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                let err = new Error(error.message);
                throw err;
            }
        )
        .then((response) => response.json())
        .then((response) => {
            alert('Thank you for your feedback! ' + JSON.stringify(response));
        })
        .catch((error) => {
            console.log('Post feedback ', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};
