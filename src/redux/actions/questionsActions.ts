import { Dispatch } from "react";
import { questions } from "../../data/questions.json";

export type QuestionType = {
  text: string;
  a: string;
  b: string;
  c: string;
  media: string;
};

export type QuestionsDispatchType =
  | { type: "GET_QUESTIONS" }
  | {
      type: "GET_QUESTIONS_SUCCESS";
      payload: QuestionType[];
    };

// const question1: QuestionType = {
//   text: "Pytanie 1 jakies....",
//   a: "",
//   b: "",
//   c: "",
//   media: "D26_015org.jpg",
// };

export const getQuestions = () => async (
  dispatch: Dispatch<QuestionsDispatchType>
) => {
  try {
    dispatch({ type: "GET_QUESTIONS" });

    setTimeout(() => {
      // console.log("getQuestions fired");
      dispatch({
        type: "GET_QUESTIONS_SUCCESS",
        payload: questions,
      });
    }, 500);
    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon", res);

    // dispatch({ type: GET_USER_SUCCESS });
  } catch (err) {
    console.log("err = ", err);
    // dispatch({ type: POKEMON_FAIL });
  }
};
