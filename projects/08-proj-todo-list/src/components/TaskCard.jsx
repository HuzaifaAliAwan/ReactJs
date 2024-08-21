import React, { useState } from "react";

import { FaPencilAlt, FaTrash, FaCheck, FaRegCircle } from "react-icons/fa";

function TaskCard() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [editEnable, setEditEnable] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDay, setTaskDay] = useState("");
  return (
    <>
      <div
        className={`${
          isCompleted ? "bg-[#E6FFB8]" : "bg-[#C9E5FF]"
        } flex flex-col gap-3  py-4 px-5 rounded-lg`}
      >
        <div className="flex flex-row justify-between">
          <div>
            <h1
              className={`${
                isCompleted ? "line-through" : ""
              } font-inter font-medium text-[18px]`}
            >
              Name
            </h1>
            <h2
              className={`${
                isCompleted ? "line-through" : ""
              } "font-inter font-normal text-[14px] text-[#A0A0A0]"`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
              voluptatibus. Quis iusto, facilis repellendus quia impedit alias
              accusamus, ab voluptatibus ad esse, exercitationem nihil corrupti!
              Reprehenderit necessitatibus animi consectetur eius.
            </h2>
          </div>
          <div
            onClick={() => setIsCompleted(!isCompleted)}
            className="flex flex-col block items-center justify-center cursor-pointer"
          >
            {isCompleted ? (
              <FaCheck
                className="text-white rounded-full bg-[#0760FB] p-1 hover:bg-[#74a6fc]"
                size={24}
              />
            ) : (
              <FaRegCircle
                className="text-[#B5B5B5] hover:bg-gray-300 rounded-full"
                size={24}
              />
            )}
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between">
          <h3 className="font-inter font-normal text-[14px] text-[#A0A0A0]">
            Day
          </h3>
          <div className="flex flex-row gap-x-6">
            <FaPencilAlt className="text-blue-500 hover:text-blue-800 cursor-pointer" />
            <FaTrash className="text-red-500 hover:text-red-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
