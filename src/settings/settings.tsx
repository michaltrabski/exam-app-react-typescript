import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
export const fadeDuration = 200;

export const MEDIA_URl = "https://poznaj-testy.hekko24.pl/pytania/";
export const MEDIA_PATH = "https://poznaj-testy.hekko24.pl/pytania/";

type Lang = { pl: string; en: string; de: string };

export const label = {
  topMenuHome: {
    text: { pl: "Strona główna", en: "Home", de: "Hause" },
    url: "/",
    icon: <HomeIcon />,
  },
  topMenuLogin: {
    text: { pl: "Logowanie", en: "Login", de: "Loginen" },
    url: "/logowanie",
    icon: <LockOutlinedIcon />,
  },
  topMenuRegister: {
    text: { pl: "Rejestracja" },
    url: "/rejestracja",
    icon: <GroupAddIcon />,
  },
  topMenuMyAccount: {
    text: { pl: "Moje konto" },
    url: "/konto",
    icon: <AccountBoxIcon />,
  },

  topMenuExam: {
    text: { pl: "Egzamin" },
    url: "/egzamin",
    icon: <DescriptionIcon />,
  },
  topMenuExam95: {
    text: { pl: "95 zestawów egzaminacyjnych" },
    url: "/95-zestawow-egzaminacyjnych",
    icon: <SchoolIcon />,
  },
  startVideo: { pl: "Start", en: "Play", de: "Playen" },
  startExam: {
    pl: "Rozpocznij losowy egzamin",
    en: "Start random exam",
    de: "Starten egzamen",
  },
  endExam: {
    pl: "Zakończ",
    en: "End",
    de: "Starten egzamen",
  },
  startExamAgain: {
    pl: "Rozpocznij kolejny losowy egzamin",
    en: "Start another random exam",
    de: "Starten egzamen",
  },
  makeExam: {
    pl: "Wykonaj egzamin",
    en: "Run an exam",
    de: "Starten egzamen",
  },
  makeExamAgain: {
    pl: "Wykonaj ponownie egzamin",
    en: "Run another exam",
    de: "Starten egzamen",
  },
  nextQuestion: {
    pl: "Następne",
    en: "Next",
    de: "Starten egzamen",
  },
};

export const sideMenuLinks = [
  label.topMenuHome,
  label.topMenuExam,
  label.topMenuExam95,
  "divider",
  label.topMenuLogin,
  label.topMenuRegister,
  label.topMenuMyAccount,
];
