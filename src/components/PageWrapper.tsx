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
  })
);

interface Props {
  children: JSX.Element;
}
export default function PageWrapper(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>{props.children}</Container>
    </div>
  );
}
