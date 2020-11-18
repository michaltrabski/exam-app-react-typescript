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

const qnr = 3;
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
      state = {
        ...state,
        exam: action.payload,
        activeAnswer: "",
        examStatus: "in_progress",
        index: qnr,
      };
      return state;

    case "END_EXAM":
      state = {
        ...state,
        examStatus: "finished",
        index: 0,
        result: state.exam.reduce((sum, item) => {
          return item.correctAnswer === item.userAnswer
            ? sum + item.score
            : sum;
        }, 0),
      };
      return state;

    case "NEXT_QUESTION":
      state = {
        ...state,
        index: state.index === 31 ? 31 : state.index + 7,
        activeAnswer: "",
      };
      return state;

    case "GO_TO_QUESTION":
      state = {
        ...state,
        index: action.index,
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
        exam: state.exam.map((item, index) => {
          const newItem = { ...item };
          if (index === action.index) newItem.userAnswer = action.answer;
          return newItem;
        }),
      };
      return state;

    default:
      return state;
  }
};

export default examReducer;
