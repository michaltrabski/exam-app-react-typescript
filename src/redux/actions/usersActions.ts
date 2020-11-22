import { Dispatch } from "react";
import {
  GET_USER,
  GET_USER_SUCCESS,
  UserDispatchType,
  UserType,
} from "./usersActionsTypes";

export const GetUser = (user: UserType) => async (
  dispatch: Dispatch<UserDispatchType>
) => {
  try {
    dispatch({ type: GET_USER, user });

    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon", res);

    // dispatch({ type: GET_USER_SUCCESS });
  } catch (err) {
    // console.log("err = ", err);
    // dispatch({ type: POKEMON_FAIL });
  }
};
