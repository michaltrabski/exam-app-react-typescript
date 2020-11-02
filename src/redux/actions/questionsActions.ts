import { Dispatch } from "react";
import { QuestionType, QuestionsDispatchType } from "./questionsTypes";

const question1: QuestionType = {
  text: "Pytanie 1 jakies....",
  a: "",
  b: "",
  c: "",
};
const question2: QuestionType = {
  text: "Pytanie 2 inne...",
  a: "odp a.",
  b: "odp b.",
  c: "odp c.",
};

const question3: QuestionType = {
  text: "Pytanie 3 inne...",
  a: "odp a. asfd",
  b: "odp b. sdf s",
  c: "odp c. sdf ",
};

export const getQuestions = () => async (
  dispatch: Dispatch<QuestionsDispatchType>
) => {
  try {
    dispatch({ type: "GET_QUESTIONS" });

    setTimeout(() => {
      // console.log("getQuestions fired");
      dispatch({
        type: "GET_QUESTIONS_SUCCESS",
        payload: [question1, question2, question3],
      });
    }, 2000);
    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon", res);

    // dispatch({ type: GET_USER_SUCCESS });
  } catch (err) {
    console.log("err = ", err);
    // dispatch({ type: POKEMON_FAIL });
  }
};
