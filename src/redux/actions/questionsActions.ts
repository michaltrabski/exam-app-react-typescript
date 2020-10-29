import { Dispatch } from "react";
import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  QuestionsDispatchType,
  QuestionType,
} from "./questoinsActionsTypes";

const question: QuestionType = { text: "lorem" };

export const getQuestions = () => async (
  dispatch: Dispatch<QuestionsDispatchType>
) => {
  try {
    dispatch({ type: GET_QUESTIONS });

    setTimeout(() => {
      console.log("getQuestions fired");
      dispatch({ type: GET_QUESTIONS_SUCCESS, payload: [question] });
    }, 2000);
    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon", res);

    // dispatch({ type: GET_USER_SUCCESS });
  } catch (err) {
    console.log("err = ", err);
    // dispatch({ type: POKEMON_FAIL });
  }
};
