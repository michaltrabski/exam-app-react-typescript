import { QuestionType } from "../redux/actions/questionsActions";
import _ from "lodash";

interface questionsGrouped {
  base1: QuestionType[];
  base2: QuestionType[];
  base3: QuestionType[];
  spec1: QuestionType[];
  spec2: QuestionType[];
  spec3: QuestionType[];
}
export const randomExam = (
  questions: QuestionType[],
  cat: string
): QuestionType[] => {
  const questionsGrouped: questionsGrouped = {
    base1: [],
    base2: [],
    base3: [],
    spec1: [],
    spec2: [],
    spec3: [],
  };
  // console.log("questions", questions);

  _.shuffle(questions)
    .filter((item) => item.cats.includes(cat))
    .forEach((item) => {
      if (item.a === "") {
        if (item.score === 1) questionsGrouped.base1.push(item);
        if (item.score === 2) questionsGrouped.base2.push(item);
        if (item.score === 3) questionsGrouped.base3.push(item);
      } else {
        if (item.score === 1) questionsGrouped.spec1.push(item);
        if (item.score === 2) questionsGrouped.spec2.push(item);
        if (item.score === 3) questionsGrouped.spec3.push(item);
      }
    });
  // console.log("questions", questions);
  console.log("questionsGrouped", questionsGrouped);

  const exam = [
    questionsGrouped.base1.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base1.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base1.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base1.pop() || questions.slice(0, 1)[0],

    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base2.pop() || questions.slice(0, 1)[0],

    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.base3.pop() || questions.slice(0, 1)[0],

    questionsGrouped.spec1.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec1.pop() || questions.slice(0, 1)[0],

    questionsGrouped.spec2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec2.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec2.pop() || questions.slice(0, 1)[0],

    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
    questionsGrouped.spec3.pop() || questions.slice(0, 1)[0],
  ];

  // console.log("questionsGrouped", questionsGrouped, exam);
  if (exam.length === 32) return exam;
  return questions.slice(0, 1);
};

export const randBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
