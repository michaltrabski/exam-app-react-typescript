import {
  QuestionType,
  QuestionsDispatchType,
} from "../actions/questionsActions";

interface QuestionsState {
  questions: QuestionType[];
}

const defaultState: QuestionsState = {
  questions: [],
};

const questionsReducer = (
  state: QuestionsState = defaultState,
  action: QuestionsDispatchType
) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return state;
    case "GET_QUESTIONS_SUCCESS":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        questions: action.payload,
      };
      return state;

    default:
      return state;
  }
};

export default questionsReducer;
