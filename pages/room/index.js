import { notification } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../src/Helpers/Globals";

function Room() {
  const [roomNo, setRoomNo] = useState("");
  const [allRooms, setAllRooms] = useState([]);

  const [triggerUseEffect, setUseEffect] = useState(false);

  const SubmitRoomHandler = (e) => {
    e.preventDefault();

    const payload = {
      roomNo: roomNo,
    };
    axios
      .post(`${baseURL}/api/post/rooms`, payload)
      .then((res) => {
        //   console.log(res);
        setRoomNo("");
        notification.success({
          message: "Success",
          description: "Room added Successfully",
        });
      })
      .catch((err) => {
        //   console.log(err);
        notification.error({
          message: "Error",
          description: "Room added Error",
        });
      });
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/rooms`)
      .then((res) => {
        console.log(`Room Data has been received`);
        console.log(res.data.data);
        setAllRooms(res.data.data);
      })
      .catch((err) => {
        console.log("Error while getting Rooms Data", err);
      });
    // .catch((err) => {
    //   console.log(`Error while getting Rooms Data ${err}`);
    // });
  }, [triggerUseEffect]);

  return (
    <div>
      <section>
        <form onSubmit={SubmitRoomHandler}>
          <div>
            <label htmlFor="roomNo">Room number</label>
            <input
              name={"roomNo"}
              type={"number"}
              // value={roomNo}
              placeholder={"Ex: 70"}
              onChange={(e) => setRoomNo(e.target.value)}
            />
          </div>
          <button>Add Room</button>
        </form>
      </section>
      <section>
        {allRooms.map((room) => {
          return (
            <div key={room._id}>
              <h1>{room.roomNo}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Room;
