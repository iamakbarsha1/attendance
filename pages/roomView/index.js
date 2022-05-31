import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BiPlus } from "react-icons/bi";
import StudentTable from "./section/StudentTable";

const RoomView = () => {
  const room = useSelector((state) => state.room.value);

  const [takeAttendance, setTakeAttendance] = useState(false);

  const onTakeAttendanceClick = () => {
    setTakeAttendance(!takeAttendance);
  };

  return (
    <main className="px-4 py-2 w-screen">
      <section className=" flex items-center justify-between">
        <div className="font-medium text-xl lg:text-2xl text-purple-700">
          Room Number - <span>{room.roomNo}</span>
        </div>

        <div
          //  onClick={handleOpen}
          className="border-[1px] p-1 lg:text-lg font-medium flex cursor-pointer text-purple-700 border-purple-700 rounded-md"
        >
          <div className="flex items-center justify-center">
            <BiPlus className="h-6 w-6" />
          </div>
          <div className="flex items-center" onClick={onTakeAttendanceClick}>
            Take Attendance
          </div>
        </div>
      </section>
      <section className="mt-2 flex flex-wrap">
        <StudentTable
          takeAttendance={takeAttendance}
          setTakeAttendance={setTakeAttendance}
          onTakeAttendanceClick={onTakeAttendanceClick}
        />
      </section>
      <div>RoomView</div>
      <div>{room._id}</div>
      <div>{room.roomNo}</div>
      <div>{room.createdAt}</div>
    </main>
  );
};

export default RoomView;
