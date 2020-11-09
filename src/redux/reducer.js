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

export const Reducer = (state = initialState, action) => {
  return state;
};
