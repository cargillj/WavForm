import {
  SET_VOLUME
} from '../actions/settings';

const initialState = {
  volume: 50
}

export default function settings(state = initialState, action) {
  switch(action.type) {
    case SET_VOLUME: {
      return {
        ...state,
        volume: action.payload
      };
    }
    
    default: 
      return state; 
  }
}
