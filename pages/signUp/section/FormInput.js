import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
// import StudentPic from "../../../Helpers/images/studentPicSVG.svg";
import Student from "../../../src/Helpers/images/studentPicSVG.svg";
import Image from "next/image";

// import baseURL from "../../../Helpers/Globals";
const baseURL = "http://localhost:1000";
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

  const updateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`${baseURL}/api/update/all-users`, {
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
      .get(`${baseURL}/api/get/all-users`)
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
      .get(`${baseURL}/api/get/rooms`)
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
        <section className="m-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={user._id}
                  className="relative justify-between border-[1px] rounded-xl m-[2px] p-[5px] "
                >
                  <section className="flex">
                    {/* <Image src={Student} /> */}
                    <div className="w-20 h-20 bg-purple-600 rounded-full"></div>
                    <div className="ml-2 ">
                      <div className="font-medium">{user.fullName}</div>
                      <div className="">{user.regNo}</div>
                      <div className="text-green-700">{user.roomNo}</div>
                    </div>
                  </section>
                  <section>
                    <div className="">{user.email}</div>
                  </section>
                  <section>
                    {/* <div>
                      <div className=" text-center">{index + 1}</div>
                    </div> */}

                    {/* <div className="w-56 text-center">{user._id}</div> */}
                    {/* <td className="w-56 text-center">{user.createdAt}</td> */}
                    <div className="absolute top-0 right-0  flex">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedUserData(user);
                            // router.push("/update");
                            setIsModalVisible(true);
                          }}
                        >
                          <FiEdit3 />
                        </button>
                      </div>
                      <div className="">
                        <button onClick={() => deleteUser(user._id)}>
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              ))
            ) : (
              <div>{errorMsg}</div>
            )}
          </div>
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

// <table>
// <thead>
//   <tr>
//     <th scope="col" className="w-4">
//       S. No
//     </th>
//     <th scope="col" className="w-56 text-center">
//       Full Name
//     </th>
//     <th scope="col" className="w-40 text-center">
//       Reg. No
//     </th>
//     <th scope="col" className="w-56 text-center">
//       Email
//     </th>
//     <th scope="col" className="w-56 text-center">
//       Created At
//     </th>
//     <th scope="col" className="w-40 text-center">
//       Update
//     </th>
//     <th scope="col" className="w-40 text-center">
//       Delete
//     </th>
//   </tr>
// </thead>
// <tbody className="">
//   {users.length > 0 ? (
//     users.map((user, index) => (
//       <tr key={user._id} className="">
//         <td className="w-56 text-center">{index + 1}</td>
//         <td className="w-56 text-center">{user.fullName}</td>
//         <td className="w-40 text-center">{user.regNo}</td>
//         <td className="w-56 text-center">{user.email}</td>
//         <td className="w-56 text-center">{user._id}</td>
//         {/* <td className="w-56 text-center">{user.createdAt}</td> */}
//         <td className="w-40 text-center">
//           <button
//             onClick={() => {
//               setSelectedUserData(user);
//               // router.push("/update");
//               setIsModalVisible(true);
//             }}
//           >
//             Update
//           </button>
//         </td>
//         <td className="w-40 text-center">
//           <button onClick={() => deleteUser(user._id)}>Delete</button>
//         </td>
//       </tr>
//     ))
//   ) : (
//     <tr>{errorMsg}</tr>
//   )}
// </tbody>
// </table>

// import { Modal, Button } from 'antd';

// class App extends React.Component {
//   state = {
//     loading: false,
//     visible: false,
//   };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = () => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false, visible: false });
//     }, 3000);
//   };

//   handleCancel = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     const { visible, loading } = this.state;
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal with customized footer
//         </Button>
//         <Modal
//           visible={visible}
//           title="Title"
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={[
//             <Button key="back" onClick={this.handleCancel}>
//               Return
//             </Button>,
//             <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
//               Submit
//             </Button>,
//             <Button
//               key="link"
//               href="https://google.com"
//               type="primary"
//               loading={loading}
//               onClick={this.handleOk}
//             >
//               Search on Google
//             </Button>,
//           ]}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);

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
