import { QuestionType } from "../redux/actions/questionsActions";

export const randomExam = (questions: QuestionType[]): QuestionType[] => {
  const exam = questions.slice(0, 32);

  return exam;
};
