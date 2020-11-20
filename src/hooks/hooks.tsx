import { useEffect, useState } from "react";
import { MEDIA_PATH } from "../settings/settings";

export const useImage = (media: string) => {
  const isVideo = media.includes(".mp4");
  const main = MEDIA_PATH + media;
  const small = MEDIA_PATH + "blur-" + media;

  const [src, setSrc] = useState(isVideo ? main : small);
  // console.log("1", src);

  useEffect(() => {
    setSrc(isVideo ? main : small);

    let timeOut: ReturnType<typeof setTimeout>;
    if (!isVideo) {
      const img = new Image();
      img.src = main;

      img.onload = () => {
        timeOut = setTimeout(() => {
          setSrc(main);
        }, 300);
      };
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [media]);

  // console.log("Xxxxxxx", src, isVideo);
  return { mediaUrl: src, isVideo };
};

// export const useImage = (lowQualitySrc: string, highQualitySrc: string) => {
//   const isVideo = highQualitySrc.includes(".mp4");
//   console.log(isVideo, highQualitySrc, lowQualitySrc);
//   const [src, setSrc] = useState(isVideo ? highQualitySrc : lowQualitySrc);

//   useEffect(() => {
//     setSrc(lowQualitySrc);

//     const img = new Image();
//     img.src = highQualitySrc;

//     img.onload = () => {
//       setTimeout(() => {
//         setSrc(highQualitySrc);
//       }, 1000);
//     };
//   }, [lowQualitySrc, highQualitySrc]);

//   return { mediaUrl: src, isVideo };
// };

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
