import { UiDispatchType } from "../actions/uiActions";

interface UiState {
  navbarMobileState: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
}

const defaultState: UiState = {
  navbarMobileState: {
    top: false,
    left: false,
    bottom: false,
    right: false,
  },
};

const uiReducer = (state = defaultState, action: UiDispatchType) => {
  switch (action.type) {
    case "TOOGLE_MOBILE_MENU":
      console.log(action);
      state = {
        ...state,
      };
      return state;
    default:
      return state;
  }
};

export default uiReducer;
