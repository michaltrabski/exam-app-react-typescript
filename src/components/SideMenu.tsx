import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store/store";
import { toogleMobileMenu } from "../redux/actions/uiActions";
import { sideMenuLinks } from "../settings/settings";
import { Link } from "react-router-dom";
import { IconButton, Theme } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

type Anchor = "top" | "left" | "bottom" | "right";

function SwipeableTemporaryDrawer() {
  const classes = useStyles();

  const { navbarMobileState } = useSelector((state: State) => state.uiReducer);
  const dispatch = useDispatch();

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    console.log(anchor, open);
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    dispatch(toogleMobileMenu(anchor, open));
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />

      <List>
        {sideMenuLinks.map((item) => (
          <>
            {item === "divider" ? (
              <Divider />
            ) : (
              <ListItem button component={Link} to={(item as any).url}>
                <ListItemIcon>{(item as any).icon}</ListItemIcon>
                <ListItemText primary={(item as any).text.pl} />
              </ListItem>
            )}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            swipeAreaWidth={0}
            anchor={anchor}
            open={navbarMobileState[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const SideMenu = () => <SwipeableTemporaryDrawer />;

export default SideMenu;
