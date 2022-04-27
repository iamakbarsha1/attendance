import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { baseURL } from "../../../src/Helpers/Globals";
import { useMediaQuery, makeStyles } from "@mui/material";
import { notification } from "antd";

function AddStudent({ handleSubmit, useEffectGetAllUsers }) {
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

  const [users, setUsers] = useState([]);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     // [e.target.name]: e.target.value,
  //     fullName: fullName,
  //     regNo: regNo,
  //     roomNo: roomNo,
  //     dept: dept,
  //     email: email,
  //     // phoneNo: phoneNo,
  //     // roomNo: roomNo,
  //   };
  //   axios
  //     .post(`${baseURL}/api/post/add-user`, payload)

  //     .then((res) => {
  //       console.log(payload);
  //       console.log("Data has been sent SUCCESSfully - handleSubmit", res);

  //       setFullName("");
  //       setRegNo("");
  //       setRoomNo("");
  //       setDept("");
  //       setEmail("");
  //       setUseEffect(!triggerUseEffect);
  //       notification.success({
  //         message: "Submitted Succesfully",
  //         description: "Saved Successfully in Database",
  //         placement: "topRight",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Internal Server Error - handleSubmit", err);
  //       // notification.error({
  //       //   message: "Error",
  //       //   description: "Error in HandleSubmit - Axios POST",
  //       //   placement: "topRight",
  //       // });
  //     });
  // };
  useEffect(() => {
    useEffectGetAllUsers();
    setUseEffect(true);
  }, [triggerUseEffect]);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/rooms`)
      .then((res) => {
        // console.log(res.data.data);
        setAllRooms(res.data.data);
        console.log("All rooms received - Success");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [triggerUseEffect]);

  return <div></div>;
}

export default AddStudent;
