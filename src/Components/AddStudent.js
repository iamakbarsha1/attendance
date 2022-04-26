import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { baseURL } from "../Helpers/Globals";
import { useMediaQuery, makeStyles } from "@mui/material";
import { notification } from "antd";

function AddStudent() {
  const is770pxBelow = useMediaQuery("(max-width:770px)");
  const is430pxBelow = useMediaQuery("(max-width:430px)");
  const is380pxBelow = useMediaQuery("(max-width:380px)");
  const is320pxBelow = useMediaQuery("(max-width:320px)");

  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      // [e.target.name]: e.target.value,
      fullName: fullName,
      regNo: regNo,
      roomNo: roomNo,
      dept: dept,
      email: email,
      // phoneNo: phoneNo,
      // roomNo: roomNo,
    };
    axios
      .post(`${baseURL}/api/post/add-user`, payload)

      .then((res) => {
        console.log(payload);
        console.log("Data has been sent SUCCESSfully - handleSubmit", res);

        setFullName("");
        setRegNo("");
        setRoomNo("");
        setDept("");
        setEmail("");
        setUseEffect(!triggerUseEffect);
        notification.success({
          message: "Submitted Succesfully",
          description: "Saved Successfully in Database",
          placement: "topRight",
        });
      })
      .catch((err) => {
        console.log("Internal Server Error - handleSubmit", err);
        // notification.error({
        //   message: "Error",
        //   description: "Error in HandleSubmit - Axios POST",
        //   placement: "topRight",
        // });
      });
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/rooms`)
      .then((res) => {
        // console.log(res.data.data);
        setAllRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [triggerUseEffect]);

  return (
    <div>
      <div
        onClick={handleOpen}
        className="border-[1px] p-1 lg:text-lg font-medium flex cursor-pointer text-purple-700 border-purple-700 rounded-md"
      >
        <div className="flex items-center justify-center">
          <BiPlus className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:h-6" />
        </div>
        <div className="flex items-center">Add Student</div>
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
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* <button onClick={openNotify}>Notify</button> */}
                <div
                  onClick={handleClose}
                  className="absolute top-3 right-3 rounded-full hover:bg-purple-700 "
                >
                  <MdClose className="h-7 w-7 text-purple-700 hover:text-white p-1" />
                </div>
                <div className="space-y-3">
                  <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                    Full Name
                  </label>
                  <input
                    required
                    value={fullName}
                    name={"fullName"}
                    type={"text"}
                    placeholder={"Ex: Akbar Sha S"}
                    onChange={(e) => setFullName(e.target.value)}
                    className="rounded-md w-full focus:border-purple-700 "
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                    Register Number
                  </label>
                  <input
                    value={regNo}
                    name={"regNo"}
                    type={"text"}
                    placeholder={"Ex: 1913181033035"}
                    onChange={(e) => setRegNo(e.target.value)}
                    className="rounded-md w-full focus:border-purple-700 "
                  />
                </div>
                <div className="block md:flex md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-3">
                  <div className="space-y-3 flex-grow">
                    <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                      Room Number
                    </label>
                    <br></br>
                    <select
                      value={roomNo}
                      onChange={(e) => setRoomNo(e.target.value)}
                      className="rounded-md w-full focus:border-purple-700 "
                    >
                      <option selected>
                        -- Please Select a Room Number --
                      </option>
                      {allRooms.sort().map((room, index) => (
                        <option value={room.roomNo} key={room._id}>
                          {room.roomNo}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                      Department
                    </label>
                    <input
                      name={"dept"}
                      value={dept}
                      type="text"
                      placeholder={"Ex: Department of BCA"}
                      onChange={(e) => setDept(e.target.value)}
                      className="rounded-md w-full focus:border-purple-700 "
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                    Email
                  </label>
                  <input
                    name={"email"}
                    value={email}
                    type="text"
                    placeholder={"Ex: akbarsha@gmail.com"}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-md w-full focus:border-purple-700 "
                  />
                </div>
                <button
                  onClick={handleClose}
                  id="submit"
                  className="w-full px-2 py-3 space-y-4 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}

export default AddStudent;
