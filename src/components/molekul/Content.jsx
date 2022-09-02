import React from "react";
import IconProsess from "../atoms/IconProsess";
import ProgressBar from "../atoms/ProgressBar";
import Dropdown from "./Dropdown";

const Content = ({ progress, name = "default" }) => {
  return (
    <div className="flex justify-start flex-col px-[16px] pt-[16px] pb-[20px] bg-neutral20 border border-neutral40 box-todo ">
      <p className="font-bold text-sm leading-6 text-neutral90 mb-[20px]">
        {name}
      </p>

      <div className="border-dashed border-t-2 border-neutral40 flex flex-row items-center justify-center">
        <ProgressBar widths={25} type={"process"} />
        <div className="basis-1/4 flex flex-row justify-between items-center ml-2">
          <IconProsess width={25} type={"process"} />

          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Content;
