import axios from "axios";
import React, { useState } from "react";
const baseURL =
  "https://ams-tnc-hostel.herokuapp.com" || "http://localhost:1000";

function FormEmail() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  console.log(file);
  console.log(fileName);

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      // const res = await axios.post("http://localhost:3000/upload", formData);
      const res = await axios.post(`${baseURL}/api/post/sendEmail`, formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  const SendHandler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      msg,
      email,
      file,
    };
    axios.post(`${baseURL}/api/post/sendEmail`, payload).then((res) => {
      console.log(payload);
      console.log("Server Received Payload Details");
      // setName("");
      // setMsg("");
      // setEmail("")
      // setFile();
    });
  };
  return (
    <main>
      <div>FormEmail</div>
      <h1>akbar.430happy@gmail.com</h1>
      <form>
        <input
          type={"text"}
          placeholder={"Name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type={"text"}
          placeholder={"message"}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <input
          type={"email"}
          placeholder={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type={"file"} placeholder={"file"} onChange={saveFile} />
        <button onClick={SendHandler}>Send</button>
      </form>
    </main>
  );
}

export default FormEmail;
