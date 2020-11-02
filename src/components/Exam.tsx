import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import { Container, Fade } from "@material-ui/core";
import Offer from "./Offer";
import { useSelector } from "react-redux";
import { State } from "../redux/store/store";
import { fadeDuration } from "../settings/settings";

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
  const [open, setOpen] = React.useState(true);
  const { questions } = useSelector((state: State) => state.questionsReducer);
  const [index, setIndex] = useState(0);

  const exam = questions;
  const question = exam[index];

  const nextQuestion = () => {
    setOpen(false);
    if (index < exam.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      // setOpen(true);

      setTimeout(() => {
        setOpen(true);
      }, fadeDuration);
    } else {
      setIndex(0);
      setTimeout(() => {
        setOpen(true);
      }, fadeDuration);
    }
  };

  return (
    <Grid item xs={12}>
      {/* Rozpocznij egzamin */}
      {exam.length > 0 && (
        <Fade in={open}>
          <div>
            <QuestionCard question={question} nextQuestion={nextQuestion} />
          </div>
        </Fade>
      )}
    </Grid>
  );
}