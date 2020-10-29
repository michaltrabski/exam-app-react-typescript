export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export type UserType = {
  uid: string;
};

interface GetUserType {
  type: typeof GET_USER;
}

export type UserDispatchType = GetUserType;
