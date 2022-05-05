import React from "react";
import axios from "axios";
import { useState } from "react";
// import FormInput from "./section/FormInput";

function Create() {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   regNo: "",
  //   dept: "",
  //   email: "",
  //   phoneNo: "",
  //   roomNo: "",
  // });
  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roomNo, setRoomNo] = useState("");

  // const handleChange = (e) => {
  // setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setFullName(e.target.value);
  //   setRegNo(e.target.value);
  //   setDept(e.target.value);
  //   setEmail(e.target.value);
  //   setPhoneNo(e.target.value);
  //   setRoomNo(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     // [e.target.name]: e.target.value,
  //     fullName: fullName,
  //     regNo: regNo,
  //     dept: dept,
  //     email: email,
  //     // phoneNo: phoneNo,
  //     // roomNo: roomNo,
  //   };

  return <div>{/* <FormInput /> */}</div>;
}

export default Create;
