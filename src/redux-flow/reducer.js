import { USER_STORE } from "../constants/app/appConstants";

const initState = {
  users: JSON.parse(localStorage.getItem(USER_STORE)) || {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "auth/gooleLogin":
      return {
        ...state,
        data: { ...state, users: action.payload },
      };
    case "auth/login":
      return {
        ...state,
        data: { ...state, users: action.payload },
      };
      case "auth/logout":
        return {
          ...state,
          data: { ...state, users: {} },
        };
    case "auth/updateProfile":
      return {
        ...state,
        data: { ...state, users: action.payload },
      };
    default:
      return state;
  }
};

export default rootReducer;
