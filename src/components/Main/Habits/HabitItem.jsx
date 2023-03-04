import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaBook, FaCheck, FaPen, FaTrash } from "react-icons/fa";
import { useHabits } from "../../../hooks/useHabits";
import { useVars } from "../../../hooks/useVars";
import { ShowFullInfo } from "./ShowFullInfo";

export const HabitItem = ({
  id,
  title,
  description,
  allDays,
  currentDays,
  progressBarPercent,
  check,
  openInfo,
}) => {
  const {
    handleCheck,
    deleteHabitsItem,
    funkOpenEditHabitsItemBubble,
    openFullInfo,
  } = useHabits();
  const { grid, setOpenEditHabitsItemBubble } = useVars();

  return (
    <div
      className={
        grid
          ? "relative min-h-[200px] max-w-[200px] bg-sandy-brown text-blue-dianne p-[30px] pb-[10px] pt-[20px] rounded-[15px] shadow-lg"
          : "relative w-[100%] bg-sandy-brown text-blue-dianne p-[30px] pb-[10px] pt-[20px] rounded-[15px] shadow-lg"
      }
    >
      <h3 className="mb-[15px] pr-[25px] text-[20px] text-ellipsis overflow-hidden w-full whitespace-nowrap">
        {title}
      </h3>
      {/* progress bar */}
      {grid ? (
        <>
          <CircularProgressbar
            value={progressBarPercent}
            text={`${currentDays}/${allDays}`}
          />
          <div className="relative right-[-10px] w-min h-min mt-[10px] ml-auto p-[10px] rounded-[5px] bg-blue-dianne text-sandy-brown flex items-center gap-[15px]">
            <button
              className="transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => openFullInfo(id)}
            >
              <FaBook />
            </button>
            <button
              className="transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => {
                window.scroll(0, 0);
                setOpenEditHabitsItemBubble();
                funkOpenEditHabitsItemBubble(id);
              }}
            >
              <FaPen />
            </button>
            <button
              className=" transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => deleteHabitsItem(id)}
            >
              <FaTrash />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="relative right-[-10px] w-min h-min mt-[10px] mb-[10px] ml-auto p-[10px] rounded-[5px] bg-blue-dianne text-sandy-brown flex items-center gap-[15px]">
            <button
              className="transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => openFullInfo(id)}
            >
              <FaBook />
            </button>
            <button
              className="transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => {
                window.scroll(0, 0);
                setOpenEditHabitsItemBubble();
                funkOpenEditHabitsItemBubble(id);
              }}
            >
              <FaPen />
            </button>
            <button
              className=" transition duration-300 hover:scale-110 active:scale-90"
              onClick={() => deleteHabitsItem(id)}
            >
              <FaTrash />
            </button>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="w-full h-[5px] bg-slate-50 rounded-[20px]">
              <div
                className={`h-full bg-blue-dianne rounded-[20px] transition-all duration-300`}
                style={{ width: `${progressBarPercent}%` }}
              ></div>
            </div>
            <div className="text-[20px]">
              {currentDays}/{allDays}
            </div>
          </div>
        </>
      )}
      <button
        className={`absolute top-[20px] right-[20px] w-[30px] h-[30px] border-[4px] border-solid rounded-[50%] transition duration-3'00 flex items-center justify-center ${
          check ? "bg-blue-dianne" : ""
        }`}
        onClick={() => handleCheck(id)}
      >
        {check && <FaCheck className="text-sandy-brown" />}
      </button>

      {openInfo ? (
        <ShowFullInfo
          id={id}
          title={title}
          description={description}
          allDays={allDays}
          currentDays={currentDays}
          progressBarPercent={progressBarPercent}
        />
      ) : (
        ""
      )}
    </div>
  );
};
