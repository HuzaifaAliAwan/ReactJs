import React from "react";

function AddNewTask({ setAddTaskShow }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center">
        <h1 className="font-inter font-bold text-[24px] w-full align-middle text-center">
          Add Task
        </h1>
        <button
          onClick={() => {
            setAddTaskShow(false);
          }}
          className="px-3 py-1 bg-[#E2EBFA] rounded-lg text-[#1563FB] text-[16px] hover:bg-[#9ab8ec] hover:text-[#ffffff] font-semibold text-lg"
        >
          &times;
        </button>
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Task Name</h2>
        <input
          className="p-3 bg-[#F7F8FC] w-full rounded-lg mt-2 outline-none hover:bg-[#e7e8eb] focus:bg-[#e7e8eb] focus:outline-none  "
          placeholder="Enter Task Name"
          type="text"
          name="Task Name"
          id="taskname"
        />
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Day</h2>
        <select className="w-full py-3 px-5 mt-2 bg-[#E2EBFA] rounded-lg text-[#1563FB] text-[16px] hover:bg-[#9ab8ec] hover:text-[#ffffff] font-semibold cursor-pointer outline-none">
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Description</h2>
        <input
          className="p-3 bg-[#F7F8FC] w-full rounded-lg mt-2 outline-none hover:bg-[#e7e8eb] focus:bg-[#e7e8eb] focus:outline-none  "
          placeholder="Enter Description"
          type="text"
          name="Task Description"
          id="taskdescription"
        />
      </div>

      <button
        className="w-full mt-3 p-3 bg-[#E2EBFA] rounded-lg text-[#1563FB] font-medium hover:bg-[#9ab8ec] hover:text-[#ffffff]  "
        type="button"
      >
        Create
      </button>
    </div>
  );
}

export default AddNewTask;
