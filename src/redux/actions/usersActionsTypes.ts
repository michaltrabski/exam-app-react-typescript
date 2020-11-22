export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export type UserType = {
  uid: string;
  email: string | null;
};

interface GetUserActionType {
  type: typeof GET_USER;
  user: UserType;
}

export type UserDispatchType = GetUserActionType;
