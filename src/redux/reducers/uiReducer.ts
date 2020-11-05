interface UiState {
  isMobileMenuOpen: boolean
}

const defaultState: UiState = {
  isMobileMenuOpen: false
};

const uiReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "MOBILE_MENU_OPEN":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        isMobileMenuOpen: true,
      };
      return state;
    default:
      return state;
  }
};

export default uiReducer;
