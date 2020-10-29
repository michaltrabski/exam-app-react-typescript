import React from "react";
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
import CssBaseline from "@material-ui/core/CssBaseline";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Button, Grid } from "@material-ui/core";
import { label } from "../settings/settings";
import { Link } from "react-router-dom";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const drawerWidth = 240;

export default function Navbar() {
  const isExamOn = false;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
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
          {["home"].map((item) => (
            <ListItem button component={Link} to={(label as any)[item].url}>
              <ListItemIcon>{(label as any)[item].icon}</ListItemIcon>
              <ListItemText primary={(label as any)[item].text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["login", "register"].map((item) => (
            <ListItem button component={Link} to={(label as any)[item].url}>
              <ListItemIcon>{(label as any)[item].icon}</ListItemIcon>
              <ListItemText primary={(label as any)[item].text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
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
