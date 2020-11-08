import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import { Button, Container, Fade } from "@material-ui/core";
import Offer from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import { fadeDuration } from "../settings/settings";
import { randomExam } from "../util/util";
import { getRandomExam } from "../redux/actions/questionsActions";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//   })
// );

export default function Exam() {
  //   const classes = useStyles();
  const dispatch = useDispatch();
  const { questions, exam, index } = useSelector(
    (state: State) => state.questionsReducer
  );

  const question = exam[index];

  const nextQuestion = () => {};

  const handleRandomExam = () => {
    const newExam = randomExam(questions);
    console.log(newExam);
    dispatch(getRandomExam(newExam));
  };

  return (
    <Grid item xs={12}>
      {/* Rozpocznij egzamin */}
      {exam.length > 0 ? (
        <>
          <QuestionCard question={question} nextQuestion={nextQuestion} />
        </>
      ) : (
        <>
          <p>Brak egzaminu</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRandomExam}
          >
            Rozpocznij egzamin
          </Button>
        </>
      )}
    </Grid>
  );
}
