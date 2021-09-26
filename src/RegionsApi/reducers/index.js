import ACTION from "../actions/actionTypes";

const initialState = {
  get_region: {
    isLoading: false,
    data: {},
    error: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.LOAD_GETREGION_REQ:
      return {
        ...state,
        get_region: {
          ...state.get_region,
          isLoading: true,
          error: ""
        }
      };

    case ACTION.LOAD_GETREGION_SUCCESS:
      return {
        ...state,
        get_region: {
          ...state.get_region,
          isLoading: false,
          data: payload
        }
      };

    case ACTION.LOAD_GETREGION_FAILURE:
      return {
        ...state,
        get_region: {
          ...state.get_region,
          isLoading: false,
          error: "Unable to get Region Data Please try again..."
        }
      };

    default:
      return state;
  }
};
