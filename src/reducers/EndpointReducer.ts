import { RELOAD_ENDPOINTS } from '../actions/types';

const initialState = {
  endpoints: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RELOAD_ENDPOINTS:
      console.log('RELOAD_ENDPOINTS reducer');
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
