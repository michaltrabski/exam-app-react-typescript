import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import { State } from "../redux/store/store";

function Login() {
  const x = useSelector((state: State) => state);

  return (
    <PageWrapper>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Logowanie
          </Typography>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default Login;
