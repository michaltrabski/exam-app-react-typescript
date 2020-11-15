import { AnswerType, QuestionType } from "./questionsActions";

export type ExamDispatchType =
  | { type: "START_RANDOM_EXAM"; payload: QuestionType[] }
  | { type: "END_EXAM" }
  | { type: "NEXT_QUESTION" }
  | { type: "SET_ACTIVE_ANSWER"; answer: AnswerType }
  | { type: "USER_GIVE_ANSWER"; answer: AnswerType; index: number };

export const startRandomExam = (exam: QuestionType[]): ExamDispatchType => {
  return {
    type: "START_RANDOM_EXAM",
    payload: exam,
  };
};

export const endExam = (): ExamDispatchType => {
  return {
    type: "END_EXAM",
  };
};

export const nextQuestion = (): ExamDispatchType => {
  return { type: "NEXT_QUESTION" };
};

export const setActiveAnswer = (answer: AnswerType): ExamDispatchType => {
  return { type: "SET_ACTIVE_ANSWER", answer };
};

export const userGiveAnswer = (
  answer: AnswerType,
  index: number
): ExamDispatchType => {
  return { type: "USER_GIVE_ANSWER", answer, index };
};
