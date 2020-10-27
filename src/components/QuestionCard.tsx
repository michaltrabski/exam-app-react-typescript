import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MEDIA_URl } from "../settings/settings";
import Answers from "./Answers";
import { Grid } from "@material-ui/core";
import ProgressBar from "./ProgressBar2";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MyProgressBar from "./MyProgressBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 700,
      marginBottom: theme.spacing(30),
    },
    endExam: {
      // marginBottom: theme.spacing(1),
    },
    questionText: {
      fontSize: "1.1rem",
      marginBottom: 0,
    },
  })
);

export default function QuestionCard() {
  const classes = useStyles();

  return (
    <>
      <MyProgressBar />

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="140"
            image={MEDIA_URl}
            title="Contemplative Reptile"
          />
        </CardActionArea>

        <CardActions>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.questionText}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            maiores.
          </Typography>
        </CardActions>
        <CardActions>
          <Answers
            a="Lorem ipsum dolor sit amet."
            b="Lorem ipsum dolor sit amet."
            c="Lorem ipsum dolor sit amet."
          />
        </CardActions>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            endIcon={<ArrowRightAltIcon />}
          >
            Następne
          </Button>
        </CardActions>

        {/* <CardActions>
        <Answers
          a=""
          b="Lorem ipsum dolor sit amet."
          c="Lorem ipsum dolor sit amet."
        />
      </CardActions> */}

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
