import { ExamDispatchType } from "../actions/examActions";
import { AnswerType, QuestionType } from "../actions/questionsActions";

interface ExamState {
  cat: string;
  exam: QuestionType[];
  examStatus: "not_started" | "in_progress" | "finished";
  index: number; // current exm question
  activeAnswer: AnswerType | "";
  result: number;
}

const qnr = 30;
const defaultState: ExamState = {
  cat: "b",
  exam: [],
  examStatus: "not_started",
  index: qnr,
  activeAnswer: "",
  result: 0,
};

const examReducer = (
  state: ExamState = defaultState,
  action: ExamDispatchType
) => {
  switch (action.type) {
    case "START_RANDOM_EXAM":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        exam: action.payload,
        examStatus: "in_progress",
        index: qnr,
      };
      return state;

    case "END_EXAM":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        examStatus: "finished",
        index: 0,
      };
      return state;

    case "NEXT_QUESTION":
      // console.log(" action.payload", action.payload);
      state = {
        ...state,
        index: state.index === 31 ? 31 : state.index + 1,
        activeAnswer: "",
      };
      return state;

    case "SET_ACTIVE_ANSWER":
      state = {
        ...state,
        activeAnswer: action.answer,
      };
      return state;

    case "USER_GIVE_ANSWER":
      state = {
        ...state,
        result: state.result + action.score,
      };
      return state;

    default:
      return state;
  }
};

export default examReducer;
