import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import { State } from "../redux/store/store";
import SchoolIcon from "@material-ui/icons/School";

function Exams95() {
  const x = useSelector((state: State) => state);
  const arr95 = Array(95).fill("exam");
  console.log(arr95);

  return (
    <PageWrapper>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            95 zestawów egzaminacyjnych.
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            Kliknij wybrany egzamin by rozpocząć test.
          </Typography>
          {arr95.map((exam, index) => (
            <Box mb={2}>
              <Box component="span" mr={2}>
                <Button
                  variant="contained"
                  color="primary"
                  // className={classes.button}
                  startIcon={<SchoolIcon />}
                  size="large"
                >
                  Egxamin nr {index + 1}
                </Button>
              </Box>

              <Typography variant="body1" component="span" gutterBottom>
                Rozpocznij egzamin.
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default Exams95;
