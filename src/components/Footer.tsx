import React from "react";
import { useDimension } from "../hooks/hooks";

const Footer = () => {
  const { innerWidth, innerHeight } = useDimension();
  return <div>{/* w={innerWidth} h={innerHeight} */}</div>;
};

export default Footer;
