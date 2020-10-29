import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store/store";

function Login() {
  const x = useSelector((state: StoreType) => state);

  console.log(x);
  return (
    <>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br />
      LOGIN
      <br /> <br /> <br /> <br /> <br />
    </>
  );
}

export default Login;
