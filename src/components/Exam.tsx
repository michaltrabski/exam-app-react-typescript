import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import { Box, Button, Container, Fade, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import { randomExam } from "../util/util";
import { goToQuestion, startRandomExam } from "../redux/actions/examActions";
import { label } from "../settings/settings";
import clsx from "clsx";
import { green, red } from "@material-ui/core/colors";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";

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
      minWidth: "45px",
    },
    success: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    danger: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      "&:hover": {
        backgroundColor: red[700],
      },
    },
  })
);

export default function Exam() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { questions } = useSelector((state: State) => state.questionsReducer);
  const { exam, examStatus, cat, index, result } = useSelector(
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
      {examStatus === "finished" && (
        <>
          <Box mb={2}>
            <Alert severity="error">
              <AlertTitle>Nie zdałeś!</AlertTitle>
              Zdobyłeś jedynie — <strong>{result} pkt. </strong>(na 74 możliwe)
            </Alert>
          </Box>
          <Box mb={1}>
            {exam.map((item, i) => (
              <Button
                className={clsx(
                  classes.btn,
                  classes[
                    exam[i].correctAnswer === exam[i].userAnswer
                      ? "success"
                      : "danger"
                  ]
                )}
                variant="contained"
                size="small"
                onClick={() => dispatch(goToQuestion(i))}
              >
                {i + 1}
              </Button>
            ))}
          </Box>
        </>
      )}

      {(examStatus === "in_progress" || examStatus === "finished") && (
        <QuestionCard question={question} />
      )}

      {(examStatus === "not_started" || examStatus === "finished") && (
        <Box mb={3}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleStartRandomExam}
            fullWidth
          >
            {examStatus === "finished"
              ? label.startExamAgain[lang]
              : label.startExam[lang]}
          </Button>
        </Box>
      )}
    </Grid>
  );
}
