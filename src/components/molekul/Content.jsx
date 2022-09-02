import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import IconProsess from "../atoms/IconProsess";
import ProgressBar from "../atoms/ProgressBar";
import Dropdown from "./Dropdown";
import NotContent from "./NotContent";

const Content = ({ progress, name = "default", id }) => {
  const [listdetail, setlistdetail] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`https://todos-project-api.herokuapp.com/todos/${id}/items`)
        .then((response) => {
          setlistdetail(response.data);
        });
    } catch (error) {}
  }, []);
  useEffect(() => {}, [listdetail]);
  return (
    <>
      {listdetail.length ? (
        listdetail.map((v) => (
          <div className="flex mb-[12px] justify-start flex-col px-[16px] pt-[16px] pb-[20px] bg-neutral20 border border-neutral40 box-todo ">
            <p className="font-bold  text-sm leading-6 text-neutral90 mb-[20px]">
              {v.name}
            </p>

            <div className="border-dashed border-t-2 border-neutral40 flex flex-row items-center justify-center">
              <ProgressBar
                widths={v.progress_percentage}
                type={
                  Number(v.progress_percentage) === 100 ? "success" : "process"
                }
              />
              <div className="basis-1/4 flex flex-row justify-between items-center ml-2">
                <IconProsess
                  width={v.progress_percentage}
                  type={
                    Number(v.progress_percentage) === 100
                      ? "success"
                      : "process"
                  }
                />

                <Dropdown id={id} data={v} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <NotContent />
      )}
    </>
  );
};

export default Content;
