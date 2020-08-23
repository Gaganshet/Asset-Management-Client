import { combineReducers } from 'redux-immutable';


const sampleReducer = function(state=[], actions){
  const { type, data } = actions;
  switch(type){
    case "RECEIVE_SAMPLE":
      return data;
      break;
    default:
      return state;
  }
}

export default combineReducers({
  sampleReducer
});