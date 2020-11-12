import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import {
  ActiveAnswer,
  setActiveAnswer,
} from "../redux/actions/questionsActions";

interface Props {
  a: string;
  b: string;
  c: string;
}

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
  })
);

const Answers = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { activeAnswer } = useSelector(
    (state: State) => state.questionsReducer
  );
  const { a, b, c } = props;
  console.log("activeAnswer", activeAnswer);

  const handleAnswer = (answer: ActiveAnswer) => {
    dispatch(setActiveAnswer(answer));
  };
  return (
    <Grid container justify={"center"}>
      {a ? (
        <>
          <Button
            className={clsx(
              classes.btnAbc,
              activeAnswer === "a" && classes.btnActive
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("a")}
          >
            A) {a}
          </Button>
          <Button
            className={clsx(
              classes.btnAbc,
              activeAnswer === "b" && classes.btnActive
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("b")}
          >
            B) {b}
          </Button>
          <Button
            className={clsx(
              classes.btnAbc,
              activeAnswer === "c" && classes.btnActive
            )}
            variant="contained"
            fullWidth
            onClick={() => handleAnswer("c")}
          >
            C) {c}
          </Button>
        </>
      ) : (
        <Grid item>
          <Button
            className={clsx(
              classes.btnYesNo,
              activeAnswer === "t" && classes.btnActive
            )}
            variant="contained"
            size="large"
            onClick={() => handleAnswer("t")}
          >
            Tak
          </Button>
          <Button
            className={clsx(
              classes.btnYesNo,
              activeAnswer === "n" && classes.btnActive
            )}
            variant="contained"
            size="large"
            onClick={() => handleAnswer("n")}
          >
            Nie
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Answers;
