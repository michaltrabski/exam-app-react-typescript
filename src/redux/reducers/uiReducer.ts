import { UiDispatchType } from "../actions/uiActions";

interface UiState {
  navbarMobileState: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  lang: "pl" | "en" | "de";
  theme: "light" | "dark";
}

const defaultState: UiState = {
  navbarMobileState: {
    top: false,
    left: false,
    bottom: false,
    right: false,
  },
  lang: "pl",
  theme: "light",
};

const uiReducer = (state = defaultState, action: UiDispatchType) => {
  switch (action.type) {
    case "TOOGLE_MOBILE_MENU":
      // console.log("action", action);
      // console.log("state1", state);
      state = {
        ...state,
        navbarMobileState: {
          ...state.navbarMobileState,
          [action.anchor]: action.open,
        },
      };
      // console.log("state2", state);
      return state;

    case "TOOGLE_THEME":
      // console.log("action", action);
      console.log("state1", state);
      state = {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
      console.log("state2", state, state.theme === "light" ? "dark" : "light");
      return state;

    default:
      return state;
  }
};

export default uiReducer;
