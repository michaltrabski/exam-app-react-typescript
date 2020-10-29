export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";

export type QuestionType = {
  text: string;
};

interface GetQuestionsI {
  type: typeof GET_QUESTIONS;
}

interface GetQuestionsSuccessI {
  type: typeof GET_QUESTIONS_SUCCESS;
  payload: QuestionType[];
}

export type QuestionsDispatchType = GetQuestionsI | GetQuestionsSuccessI;
