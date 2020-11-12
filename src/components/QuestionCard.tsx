import React, { useEffect, useState } from "react";
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
import { Grid, IconButton } from "@material-ui/core";
import ProgressBar from "./ProgressBar2";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MyProgressBar from "./MyProgressBar";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import { nextQuestion, QuestionType } from "../redux/actions/questionsActions";
import CircleProgress from "./CircleProgress";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // maxWidth: 700,
      marginBottom: theme.spacing(4),
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

type Props = {
  question: QuestionType;
};
const QuestionCard = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log("QuestionCard", mediaLoaded);
  const { question } = props;

  const isVideo = question.media.includes(".mp4");

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
    window.scrollTo(0, 0);
  };
  return (
    <>
      <MyProgressBar />

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component={isVideo ? "video" : "img"}
            alt="Contemplative Reptile"
            image={MEDIA_URl + question.media}
            title="video or image title"
            controls={isVideo}
            onLoad={() => {
              // console.log("wideo loaded");
              // setMediaLoaded(true);
            }}
          />
          {/* {mediaLoaded ? <></> : <CircleProgress />} */}
        </CardActionArea>

        <CardActions>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.questionText}
          >
            {question.text}
          </Typography>
        </CardActions>
        <CardActions>
          <Answers a={question.a} b={question.b} c={question.c} />
        </CardActions>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            endIcon={<ArrowRightAltIcon />}
            onClick={handleNextQuestion}
          >
            Następne
          </Button>
        </CardActions>

        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <QuestionAnswerOutlinedIcon />
          </IconButton>
        </CardActions> */}
      </Card>
    </>
  );
};

export default QuestionCard;
