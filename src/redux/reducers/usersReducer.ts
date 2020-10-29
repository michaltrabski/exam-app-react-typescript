import { UserType } from "../actions/usersActionsTypes";

interface UsersStateI {
  users: UserType[];
  user: UserType;
}

const defaultState = {
  users: [],
  user: { uid: "" },
};

const usersReducer = (state: UsersStateI = defaultState, action: any) => {
  return state;
};

export default usersReducer;
