import { useEffect, useState } from "react";

export const useDimension = () => {
  const el = window;
  const [innerWidth, setInnerWidth] = useState(el.innerWidth);
  const [innerHeight, setInnerHeight] = useState(el.innerHeight);
  //   console.log("useDimension FIRED");

  useEffect(() => {
    const getDimensions = () => {
      console.log("getDimensions FIRED");
      setInnerWidth(el.innerWidth);
      setInnerHeight(el.innerHeight);
    };

    el.addEventListener("resize", getDimensions);

    return () => {
      el.removeEventListener("resize", getDimensions);
    };
  }, []);

  return { innerWidth, innerHeight };
};
