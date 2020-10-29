import { QuestionType } from "../actions/questoinsActionsTypes";

interface QuestionsStateI {
  questions: QuestionType[];
}

const defaultState = {
  questions: [],
};

const questionsReducer = (
  state: QuestionsStateI = defaultState,
  action: any
) => {
  return state;
};

export default questionsReducer;
