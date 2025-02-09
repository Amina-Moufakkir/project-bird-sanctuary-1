import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_BIRDS,
  GET_BIRDS_ERROR,
  GET_BIRDS_SUCCESS,
} from "../actions";

const birdsReducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case GET_BIRDS:
      return {
        ...state,
        birdsLoaded: true,
      };
    case GET_BIRDS_SUCCESS:
      return {
        ...state,
        birdsLoaded: false,
        birds: action.payload,
      };
    case GET_BIRDS_ERROR:
      return {
        ...state,
        birdsLoaded: false,
        birdsError: true,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default birdsReducer;
