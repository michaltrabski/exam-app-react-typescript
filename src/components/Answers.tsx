import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import clsx from "clsx";
import { setActiveAnswer, userGiveAnswer } from "../redux/actions/examActions";
import { AnswerType } from "../redux/actions/questionsActions";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    btnAbc: {
      textTransform: "none",
      marginBottom: theme.spacing(1),
      justifyContent: "flex-start",
      textAlign: "start",
    },
    btnYesNo: {
      margin: theme.spacing(1),
    },
    btnActive: {
      backgroundColor: "#9E9E9E",
      "&:hover": {
        backgroundColor: "#9E9E9E",
      },
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

const Answers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { exam, index, activeAnswer, examStatus } = useSelector(
    (state: State) => state.examReducer
  );
  const { a, b, c } = exam[index];

  const handleAnswer = (answer: AnswerType, index: number) => {
    dispatch(setActiveAnswer(answer));
    if (examStatus === "in_progress") dispatch(userGiveAnswer(answer, index));
  };
  return (
    <Grid container justify={"center"}>
      {a ? (
        <>
          <Button
            className={clsx(
              classes.btnAbc,
              examStatus === "in_progress" &&
                activeAnswer === "a" &&
                classes.btnActive,
              examStatus === "finished" &&
                classes[
                  exam[index].correctAnswer === "a" ? "success" : "danger"
                ]
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("a", index)}
          >
            A) {a}
          </Button>
          <Button
            className={clsx(
              classes.btnAbc,
              examStatus === "in_progress" &&
                activeAnswer === "b" &&
                classes.btnActive,
              examStatus === "finished" &&
                classes[
                  exam[index].correctAnswer === "b" ? "success" : "danger"
                ]
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("b", index)}
          >
            B) {b}
          </Button>
          <Button
            className={clsx(
              classes.btnAbc,
              examStatus === "in_progress" &&
                activeAnswer === "c" &&
                classes.btnActive,
              examStatus === "finished" &&
                classes[
                  exam[index].correctAnswer === "c" ? "success" : "danger"
                ]
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("c", index)}
          >
            C) {c}
          </Button>
        </>
      ) : (
        <Grid item>
          <Button
            className={clsx(
              classes.btnYesNo,
              examStatus === "in_progress" &&
                activeAnswer === "t" &&
                classes.btnActive,
              examStatus === "finished" &&
                classes[
                  exam[index].correctAnswer === "t" ? "success" : "danger"
                ]
            )}
            variant="contained"
            size="large"
            onClick={() => handleAnswer("t", index)}
          >
            Tak
          </Button>
          <Button
            className={clsx(
              classes.btnYesNo,
              activeAnswer === "n" && classes.btnActive,
              examStatus === "finished" &&
                classes[
                  exam[index].correctAnswer === "n" ? "success" : "danger"
                ]
            )}
            variant="contained"
            size="large"
            onClick={() => handleAnswer("n", index)}
          >
            Nie
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Answers;
