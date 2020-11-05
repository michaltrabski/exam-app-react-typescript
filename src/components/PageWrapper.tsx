import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";

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
      <CssBaseline />
      <Container>{props.children}</Container>
    </div>
  );
}
