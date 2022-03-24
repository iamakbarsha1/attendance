import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:1000";
// const baseURL = axios.create({
//   baseURL: "http://localhost:1000",
// });

export default function FormInput() {
  // const { inputProps, handleChange } = props;

  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Error Retriving data");

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

  // const getUsers = () => {};

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      // .get("http://localhost:1000/api/get/users")
      // .get("/api/get/users")
      .get(`${baseURL}/api/get/all-users`)
      .then((res) => {
        const data = res.data;
        setUsers(data);
        console.log("Data has been received", data);
      })
      .catch((err) => {
        console.log("Error in getUsers", err);
      });
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, [setUsers]);

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
    console.log({ fullName, regNo, dept, email });

    // axios({
    // url: `${baseURL}/api/post/signUp`,
    //   url: "http://localhost:1000/api/post/signUp",
    //   method: "POST",
    //   data: payload,
    // })
    axios
      .post(`${baseURL}/api/post/signUp`, payload)
      .then((res) => {
        // axios.get("http");
        console.log("Data has been sent SUCCESSfully - handleSubmit", res);
        resetInputs();
      })
      .catch((err) => {
        console.log("Internal Server Error - handleSubmit", err);
      });
  };

  // console.log(fullName);

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

      <div>
        Posts
        {users.length ? (
          users.map((user) => (
            <div key={user._id}>
              <h1>{user.fullName}</h1>
              <h1>{user.regNo}</h1>
              <h1>{user.email}</h1>
              <h1>{user.createdAt}</h1>
            </div>
          ))
        ) : (
          <div>{errorMsg}</div>
        )}
        {/* {errorMsg ? <div>{errorMsg}</div> : null} */}
      </div>
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
