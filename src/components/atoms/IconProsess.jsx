import React from "react";

const IconProsess = ({ type = "process", width = 0 }) => {
  if (type === "process") {
    return <p className="text-xs text-neutral70 m-0">{width}%</p>;
  } else if (type === "success") {
    return (
      <img
        src={require("../../assets/icons/success.svg").default}
        className="h-5 m-[5px]"
        alt="mainlogo"
      />
    );
  } else if (type === "rejected") {
    return (
      <img
        src={require("../../assets/icons/rejected.svg").default}
        className="h-5 m-[5px]"
        alt="mainlogo"
      />
    );
  }
};

export default IconProsess;
