import { notification } from "antd";
import axios from "axios";
import React, { useState } from "react";
const baseURL =
  // "https://ams-tnc-hostel.herokuapp.com" ||
  "http://localhost:1000";

function FormEmail() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   // setFileName(e.target.files[0].name);
  // };

  // const uploadDataWithFile = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   formData.append("Name", name);
  //   formData.append("Email", email);
  //   formData.append("Msg", msg);
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     // const res = await axios.post("http://localhost:3000/upload", formData);
  //     const res = await axios.post(`${baseURL}/api/post/sendEmail`, formData);
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  const uploadDataWithFile = (e) => {
    e.preventDefault();
    // const formData = new FormData();

    // formData.append("Name", name);
    // formData.append("Email", email);
    // formData.append("Msg", msg);
    // formData.append("file", file);
    // formData.append("fileName", fileName);
    const formData = {
      name,
      msg,
      email,
      file,
    };
    axios
      .post(`${baseURL}/api/post/sendDataWithFile`, formData)
      .then((res) => {
        console.log(formData);
        console.log("Server Received Payload Details");
        setName("");
        setMsg("");
        setEmail("");
        setFile();
      })
      .catch((err) => {
        console.log("Internal Server Error - sendEmailHandler", err);
      });
  };
  const sendEmailHandler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      msg,
      email,
    };
    axios
      .post(`${baseURL}/api/post/sendEmail`, payload)
      .then((res) => {
        console.log(payload);
        console.log("Server Received Payload Details");
        notification.success({
          key: "Error",
          message: "Email Sent",
        });
        setName("");
        setMsg("");
        setEmail("");
      })
      .catch((err) => {
        console.log("Internal Server Error - sendEmailHandler", err);
      });
  };

  return (
    <main>
      <div>FormEmail</div>
      <h1 className="text-4xl">akbar.430happy@gmail.com</h1>
      <form onSubmit={sendEmailHandler} className="flex flex-col bg-purple-800">
        <div className="">
          <input
            type={"text"}
            placeholder={"Name"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type={"email"}
            placeholder={"email"}
            value={email}
            // pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type={"text"}
            placeholder={"message"}
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
        </div>
        {/* <input
          type={"file"}
          placeholder={"file"}
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
        {/* <button onClick={SendHandler}>Send</button> */}
        <button>Send</button>
      </form>
    </main>
  );
}

export default FormEmail;
