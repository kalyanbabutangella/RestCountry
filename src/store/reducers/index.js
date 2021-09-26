import { combineReducers } from "redux";
import getRegionReducer from "../../RegionsApi/reducers/index";

const appReducer = combineReducers({
  getRegions: getRegionReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
