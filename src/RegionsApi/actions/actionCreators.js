import ACTION from "./actionTypes";

export const loadgetregionReq = () => ({
  type: ACTION.LOAD_GETREGION_REQ
});

export const loadgetregionSuccess = (payload) => ({
  type: ACTION.LOAD_GETREGION_SUCCESS,
  payload
});

export const loadgetregionFailure = (payload) => ({
  type: ACTION.LOAD_GETREGION_FAILURE,
  payload
});
