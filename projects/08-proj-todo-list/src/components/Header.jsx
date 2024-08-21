import React, { useEffect, useState } from "react";
import { AddNewTask } from "./";
import { NavLink } from "react-router-dom";

function Header() {
  const [addTaskShow, setAddTaskShow] = useState(false);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <>
      {/* First row */}
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="font-inter font-bold text-[24px]">Tasks</h1>
          <h2 className="font-inter font-normal text-[16px] text-[#969696]">
            {date.toLocaleDateString("en-US", { weekday: "long" })}, &nbsp;
            {date.toLocaleDateString("en-US", { day: "numeric" })}
            &nbsp;
            {date.toLocaleDateString("en-US", { month: "long" })}
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <div
            onClick={() => {
              setAddTaskShow(true);
            }}
            className="py-3 px-5 bg-[#E2EBFA] rounded-lg text-[#1563FB] text-[16px] hover:bg-[#9ab8ec] hover:text-[#ffffff] transition-all font-semibold cursor-pointer"
          >
            + New Task
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="mt-5 flex flex-row justify-start">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-[#055CFB]" : "text-[#d9d9d9]"
              } flex flex-row font-inter font-semibold text-[16px] `}
            >
              <p>All</p>
              <div
                className={`${
                  isActive ? "bg-[#055CFB]" : "bg-[#d9d9d9]"
                } ml-1 px-1 rounded-lg`}
              >
                <p className="text-white font-bold">15</p>
              </div>
            </div>
          )}
        </NavLink>

        <p className="px-5 text-[#d9d9d9] font-bold">|</p>
        <NavLink to={"/completed"}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-[#055CFB]" : "text-[#d9d9d9]"
              } flex flex-row font-inter font-semibold text-[16px] `}
            >
              <p>Completed</p>
              <div
                className={`${
                  isActive ? "bg-[#055CFB]" : "bg-[#d9d9d9]"
                } ml-1 px-1 rounded-lg`}
              >
                <p className="text-white font-bold">15</p>
              </div>
            </div>
          )}
        </NavLink>
      </div>

      <div
        className={`${
          addTaskShow ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-[#d9d9d9] bg-opacity-20 backdrop-blur-sm z-10 drop-shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-5 mx-5 mb-5 mt-[25%] rounded-lg ">
          <AddNewTask setAddTaskShow={setAddTaskShow} />
        </div>
      </div>
    </>
  );
}

export default Header;
