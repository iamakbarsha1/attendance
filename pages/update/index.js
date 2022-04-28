import axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "../signUp/section/FormInput";
import { useRouter } from "next/router";
import { message } from "antd";

const baseURL =
  "https://ams-tnc-hostel.herokuapp.com" || "http://localhost:1000";

function Update({ setSelectedUserData }) {
  const [userId, setUserId] = useState(null);

  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Error Retriving data");

  const router = useRouter();

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

  const payload = {
    // [e.target.name]: e.target.value,
    fullName: fullName,
    regNo: regNo,
    dept: dept,
    email: email,
    // phoneNo: phoneNo,
    // roomNo: roomNo,
  };
  const handleUpdate = () => {
    axios
      .put(`/api/update/all-users/:id`, {
        fullName,
        regNo,
        dept,
        email,
      })
      .then((dbRes) => {
        console.log(dbRes);
        router.push("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setUserId(localStorage.getItem("User - ID"));

    setFullName(localStorage.getItem("User - FullName"));
    setRegNo(localStorage.getItem("User - regNo"));
    setDept(localStorage.getItem("User - dept"));
    setEmail(localStorage.getItem("User - email"));
  }, []);

  //   User - ID", id);
  //   localStorage.setItem("User - FullName", fullName);
  //   localStorage.setItem("User - regNo", regNo);
  //   localStorage.setItem("User - dept", dept);
  //   localStorage.setItem("User - email

  //   console.log({ fullName, regNo, dept, email, userId });

  return (
    <div>
      <div>Update</div>
      {/* <FormInput  /> */}

      <form onSubmit={handleUpdate} className="p-24">
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
        <button id="submit" className="bg-green-400" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
