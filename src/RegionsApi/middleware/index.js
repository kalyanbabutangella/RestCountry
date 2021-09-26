import {
  loadgetregionReq,
  loadgetregionSuccess,
  loadgetregionFailure
} from "../actions/actionCreators";

import axios from "axios";

export const loadRegions = () => (dispatch) => {
  dispatch(loadgetregionReq());
  return axios
    .get(`https://restcountries.com/v3/region/asia`)
    .then((res) => {
      console.log(res.data);
      let Region = res.data[Math.floor(Math.random() * res.data.length)];
      console.log(Region);
      dispatch(loadgetregionSuccess(Region));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loadgetregionFailure());
    });
};
