import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
// import { label } from "../settings/settings";
import { green, red } from "@material-ui/core/colors";
import classes from "*.module.css";
import { label } from "../settings/settings";
import { useSelector } from "react-redux";
import { State } from "../redux/store/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(1),
    },
    progressBar: {
      backgroundColor: "#d5d5d5",
      position: "relative",
    },
    progressBarGreen: {
      height: 20,
      width: "37%",
      backgroundColor: green[500],
    },
    progressBarText: {
      position: "absolute",
      //   backgroundColor: red[500],
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      textAlign: "center",
    },
  })
);

interface Props {
  isVideo: boolean;
}
const MyProgressBar = (props: Props) => {
  const classes = useStyles();
  const { lang } = useSelector((state: State) => state.uiReducer);

  // console.log(lang);

  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      {props.isVideo && (
        <Box>
          <Box mr={1}>
            <Button variant="contained" size="small">
              {label.startVideo[lang]}
            </Button>
          </Box>
        </Box>
      )}

      <Box width="100%" className={classes.progressBar}>
        <Box className={classes.progressBarGreen}></Box>
        <Box className={classes.progressBarText}>
          {/* <Typography variant="caption" display="block" gutterBottom>
            Pozostało 13s
          </Typography> */}
          <Typography variant="caption">
            Czas na zapoznanie się z pytaniem: <strong>13</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProgressBar;
