import { USER_STORE } from "../constants/app/appConstants";

const initState = {
  data: {
    user: JSON.stringify(localStorage.getItem(USER_STORE))||{},
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        data: {
          user: action.payload,
        },
      };
    case "auth/logout":
      return {
        ...state,
        data: {
          user: undefined,
        },
      };
    case "auth/updateProfile":
      return {
        ...state,
        data: {
          user: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
