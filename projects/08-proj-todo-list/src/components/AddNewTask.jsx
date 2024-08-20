import React from "react";

function AddNewTask() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center">
        <h1 className="font-inter font-bold text-[24px]">Add Task</h1>
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Task Name</h2>
        <input
          className="p-3 bg-[#F7F8FC] w-full rounded-lg mt-2 outline-none hover:bg-[#e7e8eb] focus:bg-[#e7e8eb] focus:outline-none transition-all"
          placeholder="Enter Task Name"
          type="text"
          name="Task Name"
          id="taskname"
        />
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Day</h2>
        <input
          className="p-3 bg-[#F7F8FC] w-full rounded-lg mt-2 outline-none hover:bg-[#e7e8eb] focus:bg-[#e7e8eb] focus:outline-none transition-all"
          placeholder="Select Day"
          type="text"
          name="Task Date"
          id="taskdate"
        />
      </div>
      <div>
        <h2 className="font-inter font-medium text-[16px]">Description</h2>
        <input
          className="p-3 bg-[#F7F8FC] w-full rounded-lg mt-2 outline-none hover:bg-[#e7e8eb] focus:bg-[#e7e8eb] focus:outline-none transition-all"
          placeholder="Enter Description"
          type="text"
          name="Task Description"
          id="taskdescription"
        />
      </div>

      <button
        className="w-full mt-3 p-3 bg-[#E2EBFA] rounded-lg text-[#1563FB] font-medium hover:bg-[#9ab8ec] hover:text-[#ffffff] transition-all"
        type="button"
      >
        Create
      </button>
    </div>
  );
}

export default AddNewTask;
