import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuestionCard from "./QuestionCard";
import { Container } from "@material-ui/core";
import Offer from "./Offer";
import Exam from "./Exam";

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
  })
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Exam />
          </Grid>
          <Grid item xs={12} md={5}>
            <Offer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
