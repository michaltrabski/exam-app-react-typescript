import { Dispatch } from "react";
import json from "../../data/questions.json";

export type AnswerType = "t" | "n" | "a" | "b" | "c";

export type QuestionType = {
  id: string;
  text: string;
  media: string;
  correctAnswer: string;
  a: string;
  b: string;
  c: string;
  cats: string[];
  score: number;
  userAnswer?: AnswerType;
};

export type QuestionsDispatchType =
  | { type: "GET_QUESTIONS" }
  | {
      type: "GET_QUESTIONS_SUCCESS";
      payload: QuestionType[];
    };

const questions: QuestionType[] = json.questions;

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
