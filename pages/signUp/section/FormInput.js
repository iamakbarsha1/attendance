import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";

// import baseURL from "../../../Helpers/Globals";
const baseURL = "http://localhost:1000";
// const baseURL = axios.create({
//   baseURL: "http://localhost:1000",
// });
export default function FormInput() {
  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Error Retriving data");

  const [selectedUserData, setSelectedUserData] = useState(null);
  const [triggerUseEffect, setUseEffect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        notification.success({
          message: "Submitted Succesfully",
          description: "Saved Successfully in Database",
          placement: "topRight",
        });
        setUseEffect(!triggerUseEffect);
        setFullName("");
        setRegNo("");
        setDept("");
        setEmail("");
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

  const deleteUser = (id) => {
    axios.delete(`${baseURL}/api/delete/all-user/${id}`).then((res) => {
      console.log(`Item deleted with id is ${id}`);
      notification.success({
        message: "Deleted Successfully",
        description: "User has been Deleted Successfully in Database",
        placement: "topRight",
      });
      setUseEffect(!triggerUseEffect);
    });
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    axios.put(`${baseURL}/api/update/all-users`, { data: _id });
  };

  // useEffect(() => {
  //   deleteUser();
  // }, [deleteUser]);

  return (
    <div>
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

      <div>
        Students
        <table>
          <thead>
            <tr>
              <th scope="col" className="w-4">
                S. No
              </th>
              <th scope="col" className="w-56 text-center">
                Full Name
              </th>
              <th scope="col" className="w-40 text-center">
                Reg. No
              </th>
              <th scope="col" className="w-56 text-center">
                Email
              </th>
              <th scope="col" className="w-56 text-center">
                Created At
              </th>
              <th scope="col" className="w-40 text-center">
                Update
              </th>
              <th scope="col" className="w-40 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="flex">
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id} className="">
                  <td className="w-56 text-center">{index + 1}</td>
                  <td className="w-56 text-center">{user.fullName}</td>
                  <td className="w-40 text-center">{user.regNo}</td>
                  <td className="w-56 text-center">{user.email}</td>
                  <td className="w-56 text-center">{user._id}</td>
                  {/* <td className="w-56 text-center">{user.createdAt}</td> */}
                  <td className="w-40 text-center">
                    <button
                      onClick={() => {
                        setSelectedUserData(user);
                        // router.push("/update");
                        setIsModalVisible(true);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td className="w-40 text-center">
                    <button onClick={() => deleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>{errorMsg}</tr>
            )}
          </tbody>
        </table>
      </div>

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
