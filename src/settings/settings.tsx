import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export const fadeDuration = 200;

export const MEDIA_URl = "https://poznaj-testy.hekko24.pl/pytania/";

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
