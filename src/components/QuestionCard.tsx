import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { label, MEDIA_URl } from "../settings/settings";
import Answers from "./Answers";
import { Grid, IconButton } from "@material-ui/core";
import ProgressBar from "./ProgressBar2";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MyProgressBar from "./MyProgressBar";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import { QuestionType } from "../redux/actions/questionsActions";
import CircleProgress from "./CircleProgress";
import { useDispatch, useSelector } from "react-redux";
import { endExam, nextQuestion } from "../redux/actions/examActions";
import { State } from "../redux/store/store";

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
  const { index, examStatus } = useSelector(
    (state: State) => state.examReducer
  );
  const { lang } = useSelector((state: State) => state.uiReducer);
  const { question } = props;

  const isVideo = question.media.includes(".mp4");

  const handleNextQuestion = () => {
    if (index === 31) {
      dispatch(endExam());
    } else {
      dispatch(nextQuestion());
    }

    window.scrollTo(0, 0);
  };
  return (
    <>
      {examStatus === "in_progress" && <MyProgressBar isVideo={isVideo} />}

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
            {index + 1}. {question.text}
          </Typography>
        </CardActions>
        <CardActions>
          <Answers />
        </CardActions>

        {examStatus === "in_progress" && (
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              endIcon={index === 31 || <ArrowRightAltIcon />}
              onClick={handleNextQuestion}
            >
              {index === 31 ? label.endExam[lang] : label.nextQuestion[lang]}
            </Button>
          </CardActions>
        )}

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
