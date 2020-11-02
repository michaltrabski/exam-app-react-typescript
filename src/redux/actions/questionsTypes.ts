export type QuestionType = {
  text: string;
  a: string;
  b: string;
  c: string;
};

export type QuestionsDispatchType =
  | { type: "GET_QUESTIONS" }
  | {
      type: "GET_QUESTIONS_SUCCESS";
      payload: QuestionType[];
    };
