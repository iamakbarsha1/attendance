import { notification } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../src/Helpers/Globals";
import { BiPlus } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery, makeStyles } from "@mui/material";
import { MdClose } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

function Room() {
  const is770pxBelow = useMediaQuery("(max-width:770px)");
  const is430pxBelow = useMediaQuery("(max-width:430px)");
  const is380pxBelow = useMediaQuery("(max-width:380px)");
  const is320pxBelow = useMediaQuery("(max-width:320px)");

  const [roomNo, setRoomNo] = useState("");
  const [allRooms, setAllRooms] = useState([]);

  const [selectedRooms, setSelectedRooms] = useState([]);

  const [triggerUseEffect, setUseEffect] = useState(false);
  const [isButtons, setIsButtons] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUseEffect(!triggerUseEffect);
  };
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const handleUpdateModalOpen = () => {
    setIsUpdateModal(true);
  };
  const handleUpdateModalClose = () => {
    setIsUpdateModal(false);
  };
  // console.log(allRooms);
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
  const styleUpdateModal = {
    position: "fixed",
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
    boxShadow: 1,
    p: is430pxBelow ? "10px 20px 20px 20px" : "20px 30px 30px 30px",
  };

  const deleteRoom = (id) => {
    console.log("selected Room ID", id);
    axios
      .delete(`${baseURL}/api/delete/rooms/${id}`)
      .then((res) => {
        console.log("Result", res);
        notification.success({
          message: "Deleted Successfully",
          description: "Room has been Deleted Successfully in Database",
          placement: "topRight",
        });
        setUseEffect(!triggerUseEffect);
      })
      .catch((err) => {
        console.log("Error in .catch@deleteRoom", err);
      });
  };

  const UpdateRoomHandler = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/api/update/rooms`, {
        id: selectedRooms._id,
        updatedData: selectedRooms,
      })
      .then((res) => {
        console.log(res);
        setIsUpdateModal(false);
        notification.success({
          message: res.data.key,
          description: res.data.data,
          placement: "topRight",
        });
        setUseEffect(!triggerUseEffect);
      })
      .catch((err) => {
        console.log(err);
        setIsUpdateModal(false);
        notification.error({
          message: "Updation Error",
          description: "Room has been Updation Error in Database",
          placement: "topRight",
        });
      });
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

  // get AllRooms from DB via Axios
  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/rooms`)
      .then((res) => {
        console.log(`Room Data has been received from DB via Axios HTTPs`);
        // console.log(res.data.data);
        setAllRooms(res.data.data);
      })
      .catch((err) => {
        console.log("Error while getting Rooms Data", err);
      });
  }, [triggerUseEffect]);

  // console.log(selectedRooms);

  return (
    <div className="px-4 py-2 w-screen">
      <section className=" flex items-center justify-between">
        <div className="font-medium text-xl lg:text-2xl text-purple-700">
          Rooms
        </div>
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
      </section>
      <section className="flex flex-wrap ">
        {allRooms.map((room) => {
          return (
            <main className="relative group" key={room._id}>
              <section key={room._id} className="flex-wrap">
                <button
                  className="hidden absolute top-16 right-10 group-hover:block"
                  onClick={() => {
                    setSelectedRooms(room);
                    // router.push("/update");
                    // setIsModalVisible(true);
                    // handleUpdateModalOpen();
                  }}
                >
                  <FiEdit3
                    onClick={handleUpdateModalOpen}
                    className="h-4 w-4 text-green-400"
                  />
                </button>
                <Modal
                  keepMounted
                  open={isUpdateModal}
                  onClose={handleUpdateModalClose}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box sx={styleUpdateModal} className="relative">
                    <section>
                      <form onSubmit={UpdateRoomHandler} className="space-y-3">
                        <div
                          onClick={handleUpdateModalClose}
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
                            value={
                              selectedRooms !== null ? selectedRooms.roomNo : ""
                            }
                            name={"fullName"}
                            type={"number"}
                            placeholder={"Ex: 70"}
                            onChange={(e) =>
                              setSelectedRooms({
                                ...selectedRooms,
                                roomNo: e.target.value,
                              })
                            }
                            className="rounded-md w-full focus:border-purple-700"
                          />
                        </div>
                        <div>
                          <button
                            // onClick={handleClose}
                            onClick={() => {
                              setIsUpdateModal(false);
                            }}
                            id="submit"
                            className="w-full px-2 py-3 space-y-4 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
                          >
                            Update Room
                          </button>
                        </div>
                      </form>
                    </section>
                  </Box>
                </Modal>
                <button
                  className="hidden absolute top-4 right-10 group-hover:block"
                  onClick={() => deleteRoom(room._id)}
                >
                  <AiOutlineDelete className="h-4 w-4 text-red-600" />
                </button>
                <div className="w-20 h-20 bg-slate-100 m-2 rounded-full flex items-center justify-center text-base font-semibold">
                  {room.roomNo}
                </div>
                {/* <div>{room._id}</div>
              <div>{room.createdAt}</div>
              <div>{room.updatedAt}</div> */}
              </section>
            </main>
          );
        })}
      </section>
    </div>
  );
}

export default Room;
