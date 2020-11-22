import {
  GET_USER,
  UserDispatchType,
  UserType,
} from "../actions/usersActionsTypes";

interface UsersStateI {
  users: UserType[];
  user: UserType;
}

const defaultState = {
  users: [],
  user: { uid: "", email: "" },
};

const usersReducer = (
  state: UsersStateI = defaultState,
  action: UserDispatchType
) => {
  switch (action.type) {
    case GET_USER:
      state = { ...state, user: action.user };
      return state;

    default:
      return state;
  }
};

export default usersReducer;
