import { Dispatch } from "react";
import { questions } from "../../data/questions.json";

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
};

export type ActiveAnswer = "t" | "n" | "a" | "b" | "c";

export type QuestionsDispatchType =
  | { type: "GET_QUESTIONS" }
  | {
      type: "GET_QUESTIONS_SUCCESS";
      payload: QuestionType[];
    }
  | { type: "GET_RANDOM_EXAM"; payload: QuestionType[] }
  | { type: "NEXT_QUESTION" }
  | { type: "SET_ACTIVE_ANSWER"; answer: ActiveAnswer };

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

export const getRandomExam = (exam: QuestionType[]): QuestionsDispatchType => {
  return {
    type: "GET_RANDOM_EXAM",
    payload: exam,
  };
};

export const nextQuestion = (): QuestionsDispatchType => {
  return { type: "NEXT_QUESTION" };
};

export const setActiveAnswer = (
  answer: ActiveAnswer
): QuestionsDispatchType => {
  return { type: "SET_ACTIVE_ANSWER", answer };
};
