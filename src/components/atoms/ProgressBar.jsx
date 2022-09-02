import React from "react";
import { useEffect } from "react";

const ProgressBar = ({ widths, type = "process" }) => {
  if (type === "process") {
    return (
      <div className="w-full basis-3/4 h-4 bg-neutral30 rounded-full  ">
        <div
          className="bg-primary h-4 rounded-full"
          style={{ width: widths + "%" }}
        ></div>
      </div>
    );
  } else if (type === "success") {
    return (
      <div className="w-full basis-3/4 h-4 bg-neutral30 rounded-full  ">
        <div
          className="bg-success h-4 rounded-full"
          style={{ width: widths + "%" }}
        ></div>
      </div>
    );
  } else if (type === "rejected") {
    return (
      <div className="w-full basis-3/4 h-4 bg-neutral30 rounded-full  ">
        <div
          className="bg-dangerh-4 rounded-full"
          style={{ width: widths + "%" }}
        ></div>
      </div>
    );
  }
};

export default ProgressBar;
