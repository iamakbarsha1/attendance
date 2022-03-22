import React, { useState } from "react";
import axios from "axios";

export default function FormInput() {
  // const { inputProps, handleChange } = props;

  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const HandleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const HandleRegNoChange = (e) => {
    setRegNo(e.target.value);
  };
  const HandleDeptChange = (e) => {
    setDept(e.target.value);
  };
  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetInputs = () => {
    setFullName("");
    setRegNo("");
    setDept("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      // [e.target.name]: e.target.value,
      fullName: fullName,
      regNo: regNo,
      dept: dept,
      email: email,
      // phoneNo: phoneNo,
      // roomNo: roomNo,
    };

    axios({
      url: "http://localhost:1000/post/signUp",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent SUCCESSfully");
        resetInputs();
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
  };

  console.log(fullName);

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-24">
        <div>
          <label>Full Name</label>
          <input
            value={fullName}
            name={"fullName"}
            type={"text"}
            placeholder={"Ex: Akbar Sha S"}
            onChange={HandleFullNameChange}
          />
        </div>
        <div>
          <label>Register Number</label>
          <input
            value={regNo}
            name={"regNo"}
            type={"text"}
            placeholder={"Ex: 1913181033035"}
            onChange={HandleRegNoChange}
          />
        </div>
        <div>
          <label>Department</label>
          <input
            name={"dept"}
            value={dept}
            type="text"
            placeholder={"Ex: Department of BCA"}
            onChange={HandleDeptChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name={"email"}
            value={email}
            type="text"
            placeholder={"Ex: akbarsha@gmail.com"}
            onChange={HandleEmailChange}
          />
        </div>
        <button id="submit" className="bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}
// const inputs = [
//   {
//     id: 1,
//     name: "fullName",
//     value: fullName,
//     type: "text",
//     placeholder: "Ex: Akbar Sha S",
//     label: "Full Name",
//   },
//   {
//     id: 2,
//     name: "regNo",
//     value: regNo,
//     type: "text",
//     placeholder: "Ex: 1913181033035",
//     label: "Register Number",
//   },
//   {
//     id: 3,
//     name: "dept",
//     value: dept,
//     type: "text",
//     placeholder: "Ex: Department of BCA",
//     label: "Department",
//   },
//   {
//     id: 4,
//     name: "email",
//     value: email,
//     type: "email",
//     placeholder: "Ex: akbarsha@gmail.com",
//     label: "Email",
//   },
//   {
//     id: 5,
//     name: "phoneNo",
//     value: phoneNo,
//     type: "number",
//     placeholder: "Ex: 9941786918",
//     label: "Phone Number",
//   },
//   {
//     id: 6,
//     name: "roomNo",
//     value: roomNo,
//     type: "number",
//     placeholder: "Ex: 7",
//     label: "Room Number",
//   },
// ];
