import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import { Box, Button, Container, Fade } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import { randomExam } from "../util/util";
import { startRandomExam } from "../redux/actions/examActions";
import { label } from "../settings/settings";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    btn: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export default function Exam() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { questions } = useSelector((state: State) => state.questionsReducer);
  const { exam, examStatus, cat, index } = useSelector(
    (state: State) => state.examReducer
  );
  const { lang } = useSelector((state: State) => state.uiReducer);

  const question = exam[index];

  const handleStartRandomExam = () => {
    const newExam = randomExam(questions, cat);
    dispatch(startRandomExam(newExam));
  };

  useEffect(() => {});
  return (
    <Grid item xs={12}>
      {(examStatus === "not_started" || examStatus === "finished") && (
        <Box mb={3}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleStartRandomExam}
          >
            {examStatus === "finished"
              ? label.startExamAgain[lang]
              : label.startExam[lang]}
          </Button>
        </Box>
      )}

      {examStatus === "finished" && (
        <Box>
          {exam.map((item, i) => (
            <Button className={classes.btn} variant="contained" size="small">
              {i + 1}
            </Button>
          ))}
        </Box>
      )}

      {(examStatus === "in_progress" || examStatus === "finished") && (
        <QuestionCard question={question} />
      )}
    </Grid>
  );
}
