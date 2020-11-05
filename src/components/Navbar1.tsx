import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, Grid } from "@material-ui/core";
import { label, topMenuSideLinks } from "../settings/settings";
import { Link } from "react-router-dom";
import { useDimension } from "../hooks/hooks";
import MenuBackdrop from "./MenuBackdrop";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      // flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: theme.zIndex.drawer + 2,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    toolbar: {
      justifyContent: "space-between",
    },
    button: {
      minWidth: "0",
    },
  })
);

export default function Navbar1() {
  const isExamOn = true;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const element = useRef<HTMLInputElement>(null);
  const { innerWidth, innerHeight } = useDimension();

  useEffect(() => {
    // console.log("element", element, element?.current?.id);
    // console.log(innerWidth, innerHeight);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar} ref={element} id="abcabc">
          {isExamOn ? (
            <>
              <Button color="inherit" className={classes.button}>
                1/32
              </Button>
              <Button color="inherit" className={classes.button}>
                Kat: B
              </Button>
              <Button color="inherit" className={classes.button}>
                24:59
              </Button>
              <Button color="inherit" className={classes.button}>
                Zakończ
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" noWrap className={classes.title}>
                poznaj-egzamin.pl
              </Typography>
              <Button color="inherit" className={classes.button}>
                Testy
              </Button>
              <Button color="inherit" className={classes.button}>
                Pytania
              </Button>
              <Button color="inherit" className={classes.button}>
                Cennik
              </Button>
              <Button color="inherit" className={classes.button}>
                Rejestracja
              </Button>
              <Button color="inherit" className={classes.button}>
                Logowanie
              </Button>
            </>
          )}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit.
        </Typography> */}
      </main>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {console.log(topMenuSideLinks)}
          {topMenuSideLinks.map((item) => {
            return (
              <>
                {item === "divider" ? (
                  <Divider />
                ) : (
                  <ListItem
                    button
                    component={Link}
                    to={(label as any)[item].url}
                  >
                    <ListItemIcon>{(label as any)[item].icon}</ListItemIcon>
                    <ListItemText primary={(label as any)[item].text} />
                  </ListItem>
                )}
              </>
            );
          })}
        </List>
      </Drawer>

      <MenuBackdrop open={open} />
    </div>
  );
}
