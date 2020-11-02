import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export const fadeDuration = 200;

export const MEDIA_URl =
  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

export const label = {
  home: {
    text: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  startVideo: "Start",
  login: {
    text: "Logowanie",
    url: "/logowanie",
    icon: <LockOutlinedIcon />,
  },
  register: {
    text: "Rejestracja",
    url: "/rejestracja",
    icon: <GroupAddIcon />,
  },
};
