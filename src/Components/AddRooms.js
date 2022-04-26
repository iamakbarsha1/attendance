import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { baseURL } from "../Helpers/Globals";
import { useMediaQuery, makeStyles } from "@mui/material";
import { notification } from "antd";

function AddRooms() {
  const is770pxBelow = useMediaQuery("(max-width:770px)");
  const is430pxBelow = useMediaQuery("(max-width:430px)");
  const is380pxBelow = useMediaQuery("(max-width:380px)");
  const is320pxBelow = useMediaQuery("(max-width:320px)");

  const [roomNo, setRoomNo] = useState("");
  const [allRooms, setAllRooms] = useState([]);

  const [triggerUseEffect, setUseEffect] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUseEffect(!triggerUseEffect);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: is770pxBelow
      ? is430pxBelow
        ? is380pxBelow
          ? is320pxBelow
            ? 300
            : 330
          : 350
        : 600
      : 700,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: is430pxBelow ? "10px 20px 20px 20px" : "20px 30px 30px 30px",
  };
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
        setUseEffect(!triggerUseEffect);
        setOpen(false);
      })
      .catch((err) => {
        //   console.log(err);
        notification.error({
          message: "Error",
          description: "Room added Error",
        });
      });
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className="border-[1px] p-1 lg:text-lg font-medium flex cursor-pointer text-purple-700 border-purple-700 rounded-md"
      >
        <div className="flex items-center justify-center">
          <BiPlus className="h-6 w-6" />
        </div>
        <div className="flex items-center">Add Rooms</div>
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className="relative">
          <section>
            <form onSubmit={SubmitRoomHandler} className="space-y-3">
              <div
                onClick={handleClose}
                className="absolute top-3 right-3 rounded-full hover:bg-purple-700 "
              >
                <MdClose className="h-7 w-7 text-purple-700 hover:text-white p-1" />
              </div>
              <div className="space-y-3">
                <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                  Room number
                </label>
                <input
                  required
                  value={roomNo}
                  name={"fullName"}
                  type={"number"}
                  placeholder={"Ex: 70"}
                  onChange={(e) => setRoomNo(e.target.value)}
                  className="rounded-md w-full focus:border-purple-700"
                />
              </div>
              <div>
                <button
                  // onClick={handleClose}
                  id="submit"
                  className="w-full px-2 py-3 space-y-4 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
                >
                  Add Room
                </button>
              </div>
            </form>
          </section>
        </Box>
      </Modal>
    </div>
  );
}

export default AddRooms;
