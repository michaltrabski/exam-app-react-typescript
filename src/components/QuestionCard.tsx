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
import { Grid, IconButton } from "@material-ui/core";
import ProgressBar from "./ProgressBar2";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import MyProgressBar from "./MyProgressBar";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import { QuestionType } from "../redux/actions/questionsTypes";

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
  nextQuestion: () => void;
};
const QuestionCard = (props: Props) => {
  const classes = useStyles();
  const { question, nextQuestion } = props;

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
            onClick={nextQuestion}
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
