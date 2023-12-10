import React from "react";
import loadingImg from "../../assets/img/loading_2.gif";
export default function Loading() {
  return (
    <img
      src={loadingImg}
      style={{ width: 200, height: 200 }}
      alt="loading....."
    />
  );
}
