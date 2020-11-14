import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Grid, Typography } from "@material-ui/core";

function HomePage() {
  return (
    <PageWrapper>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Strona główna
          </Typography>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default HomePage;
