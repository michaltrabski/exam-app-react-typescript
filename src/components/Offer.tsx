import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from "@material-ui/core";
import MyTable from "./Table";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import { green } from "@material-ui/core/colors";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        // width: theme.spacing(16),
        // height: theme.spacing(16),
      },
    },
  })
);

export default function Offer() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Oferta
      </Typography>

      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        <DoneOutlinedIcon style={{ color: green[500] }} />
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>

      <Box mb={1}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          // className={classes.button}
          startIcon={<ShoppingCartSharpIcon />}
          size="large"
        >
          Kup Teraz 17zł / 1 miesiąc
        </Button>
      </Box>

      <Box mb={1}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          // className={classes.button}
          startIcon={<ShoppingCartSharpIcon />}
          size="large"
        >
          Kup Teraz 20zł / 3 miesiące
        </Button>
      </Box>
      <Box mb={1}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          // className={classes.button}
          startIcon={<ShoppingCartSharpIcon />}
          size="large"
        >
          Kup Teraz 24zł / cały rok!
        </Button>
      </Box>
    </div>
  );
}
