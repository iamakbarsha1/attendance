import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { BiPlus } from "react-icons/bi";
import { Modal, Button } from "antd";
// import StudentPic from "../../../Helpers/images/studentPicSVG.svg";
import Student from "../../../src/Helpers/images/studentPicSVG.svg";
import Image from "next/image";

// import baseURL from "../../../Helpers/Globals";
const baseURL =
  "https://ams-tnc-hostel.herokuapp.com" || "http://localhost:1000";
// const baseURL = axios.create({
//   baseURL: "http://localhost:1000",
// });
export default function FormInput() {
  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");

  const [users, setUsers] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Error Retriving data");

  const [selectedUserData, setSelectedUserData] = useState(null);
  const [triggerUseEffect, setUseEffect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddStudentModalVisible, setAddStudentModalVisible] = useState(false);

  // const HandleFullNameChange = (e) => {
  //   setFullName(e.target.value);
  // };
  // const HandleRegNoChange = (e) => {
  //   setRegNo(e.target.value);
  // };
  // const HandleDeptChange = (e) => {
  //   setDept(e.target.value);
  // };
  // const HandleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const resetInputs = () => {
  //   setFullName("");
  //   setRegNo("");
  //   setDept("");
  //   setEmail("");
  // };

  // const getUsers = () => {};
  const router = useRouter();
  // console.log(users);
  const openNotify = (e) => {
    e.preventDefault();
    notification.success({
      message: "Submitted Succesfully",
      description: "Saved Successfully in Database",
    });
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
      .post(`/api/post/add-user`, payload)

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

  const updateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`/api/update/all-users`, {
        id: selectedUserData._id,
        updatedData: selectedUserData,
      })
      .then((res) => {
        console.log(res);
        setIsModalVisible(false);
        notification.success({
          message: res.data.key,
          description: res.data.data,
          placement: "topRight",
        });
        setUseEffect(!triggerUseEffect);
      })
      .catch((err) => {
        console.log(err);

        setIsModalVisible(false);
        notification.error({
          message: "Error",
          description: "Error in Updating the UserData",
          placement: "topRight",
        });
      });
    // console.log(selectedUserData);
  };

  useEffect(() => {
    axios
      .get(`/api/get/all-users`)
      .then((res) => {
        setUsers(res.data.data);
        console.log("Data has been received");
      })
      .catch((err) => {
        console.log("Error in getUsers", err);
      });
  }, [triggerUseEffect]);

  useEffect(() => {
    axios
      .get(`/api/get/rooms`)
      .then((res) => {
        // console.log(res.data.data);
        setAllRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [triggerUseEffect]);
  // console.log(allRooms);
  // const UpdateHandler = (e) => {
  //   e.preventDefault();
  //   axios.put(`${baseURL}/api/update/all-users`, { data: _id });
  // };

  // useEffect(() => {
  //   deleteUser();
  // }, [deleteUser]);

  return (
    <div>
      <main>
        <section>Dashboard</section>
        <section className="flex">
          <div>Students</div>
          <div
            className="border-[1px] flex cursor-pointer"
            onClick={() => {
              setAddStudentModalVisible(!isAddStudentModalVisible);
            }}
          >
            <div>
              <BiPlus className="h-6 w-6" />
            </div>
            <div>Add Student</div>
          </div>

          <div>
            {isAddStudentModalVisible && (
              <form onSubmit={handleSubmit} className="p-24">
                <button onClick={openNotify}>Notify</button>
                <div>
                  <label>Full Name</label>
                  <input
                    value={fullName}
                    name={"fullName"}
                    type={"text"}
                    placeholder={"Ex: Akbar Sha S"}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Register Number</label>
                  <input
                    value={regNo}
                    name={"regNo"}
                    type={"text"}
                    placeholder={"Ex: 1913181033035"}
                    onChange={(e) => setRegNo(e.target.value)}
                  />
                </div>
                <div>
                  <label>Room Number</label>
                  {/* <input
                    value={roomNo}
                    name={"roomNo"}
                    type={"number"}
                    placeholder={"Ex: 70"}
                    onChange={(e) => setRoomNo(e.target.value)}
                  /> */}
                  <select
                    value={roomNo}
                    onChange={(e) => setRoomNo(e.target.value)}
                  >
                    {allRooms.map((room, index) => {
                      <option value={room.roomNo}>{room.createdAt}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label>Department</label>
                  <input
                    name={"dept"}
                    value={dept}
                    type="text"
                    placeholder={"Ex: Department of BCA"}
                    onChange={(e) => setDept(e.target.value)}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    name={"email"}
                    value={email}
                    type="text"
                    placeholder={"Ex: akbarsha@gmail.com"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button id="submit" className="bg-green-400">
                  Submit
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <main>
        <section className="flex justify-between text-purple-600 px-3 py-2 font-medium">
          <section>
            <div>Student List</div>
            <div className="font-medium">
              Manage all your students right here!
            </div>
          </section>
          <section className="flex items-center justify-center">
            <div
              className="flex border-[1px] border-purple-600 p-1 rounded-lg cursor-pointer"
              onClick={() => {
                setAddStudentModalVisible(!isAddStudentModalVisible);
              }}
            >
              <div>
                <BiPlus className="h-6 w-6" />
              </div>
              <div>Add Student</div>
            </div>
          </section>
        </section>
      </main>

      <Modal
        title="Update Student"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button
            key="close"
            type="primary"
            // loading={loading}
            onClick={() => setIsModalVisible(false)}
          >
            Close
          </Button>,
          // <Button
          //   key="update"
          //   type="primary"
          //   className="bg-red-400"
          //   // loading={loading}
          //   onClick={() => setIsModalVisible(false)}
          // >
          //   Update
          // </Button>,
        ]}
      >
        {/* {console.log(selectedUserData)} */}
        <section>
          <form onSubmit={updateHandler}>
            <div>
              <label>Full Name</label>
              <input
                type={"text"}
                placeholder={"Ex: Akbar Sha S"}
                onChange={(e) => {
                  setSelectedUserData({
                    ...selectedUserData,
                    fullName: e.target.value,
                  });
                }}
                value={
                  selectedUserData !== null ? selectedUserData.fullName : ""
                }
              />
            </div>
            <div>
              <label>Register Number</label>
              <input
                name={"regNo"}
                type={"text"}
                placeholder={"Ex: 1913181033035"}
                onChange={(e) => {
                  setSelectedUserData({
                    ...selectedUserData,
                    regNo: e.target.value,
                  });
                }}
                value={selectedUserData !== null ? selectedUserData.regNo : ""}
              />
            </div>
            <div>
              <label>Room Number</label>
              <input
                name={"roomNo"}
                type={"Number"}
                placeholder={"Ex: 70"}
                onChange={(e) => {
                  setSelectedUserData({
                    ...selectedUserData,
                    roomNo: e.target.value,
                  });
                }}
                value={selectedUserData !== null ? selectedUserData.roomNo : ""}
              />
              <select value={""}>
                {allRooms.map((room) => {
                  <option value={room.roomNo}>{room.roomNo}</option>;
                })}
                {/* <option value={"room2"}>Room 2</option>
                <option value={"room3"}>Room 3</option> */}
              </select>
            </div>
            <div>
              <label>Department</label>
              <input
                type="text"
                placeholder={"Ex: Department of BCA"}
                onChange={(e) => {
                  setSelectedUserData({
                    ...selectedUserData,
                    dept: e.target.value,
                  });
                }}
                value={selectedUserData !== null ? selectedUserData.dept : ""}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name={"email"}
                type="text"
                placeholder={"Ex: akbarsha@gmail.com"}
                onChange={(e) => {
                  setSelectedUserData({
                    ...selectedUserData,
                    email: e.target.value,
                  });
                }}
                value={selectedUserData !== null ? selectedUserData.email : ""}
              />
            </div>
            <button>Update</button>
          </form>
        </section>
      </Modal>
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
