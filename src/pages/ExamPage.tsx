import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import { State } from "../redux/store/store";
import SchoolIcon from "@material-ui/icons/School";
import Exam from "../components/Exam";
import Offer from "../components/Offer";

function ExamPage() {
  //   const x = useSelector((state: State) => state);

  return (
    <PageWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Exam />
        </Grid>
        <Grid item xs={12} md={5}>
          <Offer />
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default ExamPage;
