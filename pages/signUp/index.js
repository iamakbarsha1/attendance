import React from "react";
import axios from "axios";
import { useState } from "react";
import FormInput from "./section/FormInput";

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

  //   axios({
  //     url: "http://localhost:1000/post/signUp",
  //     method: "POST",
  //     data: payload,
  //   })
  //     .then(() => {
  //       console.log("Data has been sent SUCCESSfully");
  //     })
  //     .catch(() => {
  //       console.log("Internal Server Error");
  //     });
  // };
  // console.log(formData);
  return (
    <div>
      <FormInput />
      {/* <form onSubmit={handleSubmit} className="p-24">
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} handleChange={handleChange} />
        ))}
        <FormInput />
        <button id="submit" className="bg-green-400">
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Create;
