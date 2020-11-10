import { Dishes } from '../common/dishes';
import { Comments } from '../common/comments';
import { Leaders } from '../common/leaders';
import { Promotions } from '../common/promotions';

export const initialState = {
  dishes: Dishes,
  comments: Comments,
  promotions: Promotions,
  leaders: Leaders,
};

// Reducer function - used to modifiy the app's state
// takes the curent state and action as params and generates the next state
export const Reducer = (state = initialState, action) => {
  return state;
};
