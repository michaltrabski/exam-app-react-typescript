import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

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
    },
    btnYesNo: {
      margin: theme.spacing(1),
    },
  })
);

const Answers = (props: Props) => {
  const classes = useStyles();

  const { a, b, c } = props;

  return (
    <Grid container justify={"center"}>
      {a ? (
        <>
          <Button className={classes.btnAbc} variant="contained" fullWidth>
            A) {a}
          </Button>
          <Button className={classes.btnAbc} variant="contained" fullWidth>
            B) {b}
          </Button>
          <Button className={classes.btnAbc} variant="contained" fullWidth>
            C) {c}
          </Button>
        </>
      ) : (
        <Grid item>
          <Button className={classes.btnYesNo} variant="contained" size="large">
            Tak
          </Button>
          <Button className={classes.btnYesNo} variant="contained" size="large">
            Nie
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Answers;
