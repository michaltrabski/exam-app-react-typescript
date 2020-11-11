import {
  QuestionType,
  QuestionsDispatchType,
} from "../actions/questionsActions";

interface QuestionsState {
  questions: QuestionType[];
  cat: string;
  exam: QuestionType[];
  index: number; // current exm question
}

const defaultState: QuestionsState = {
  questions: [],
  cat: "b",
  exam: [],
  index: 0,
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
    case "GET_RANDOM_EXAM":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        exam: action.payload,
      };
      return state;

    case "NEXT_QUESTION":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        index: state.index === 31 ? 31 : state.index + 1,
      };
      return state;
    default:
      return state;
  }
};

export default questionsReducer;
