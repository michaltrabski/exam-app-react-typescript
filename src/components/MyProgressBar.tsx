import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { label } from "../settings/settings";
import { green, red } from "@material-ui/core/colors";
import classes from "*.module.css";

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
      height: 18,
      width: "37%",
      backgroundColor: green[500],
    },
    progressBarText: {
      position: "absolute",
      //   backgroundColor: red[500],
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      //   height: 15,
      //   width: "10%",
      //   backgroundColor: green[500],
    },
  })
);
const MyProgressBar = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      <Box>
        <Box mr={1}>
          <Button variant="contained" size="small">
            {label.startVideo}
          </Button>
        </Box>
      </Box>
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
