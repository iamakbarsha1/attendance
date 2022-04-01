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
  const [triggerUseEffect, setuseEffect] = useState(false);
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

  useEffect(() => {
    axios // .get("https://jsonplaceholder.typicode.com/users") // .get("http://localhost:1000/api/get/users") // .get("/api/get/users")
      .get(`${baseURL}/api/get/all-users`)
      .then((res) => {
        const GetUsersData = res.data.data;
        console.log(res.data.data);
        // setUsers(...users, data);
        setUsers(GetUsersData);
        console.log("Data has been received", data);
      })
      .catch((err) => {
        console.log("Error in getUsers", err);
      });
  }, [triggerUseEffect]);

  const deleteUser = (_id) => {
    const newUsersAfterDeletion = users.filter((newUser) => {
      return newUser._id !== _id;
    });
    setUsers(newUsersAfterDeletion);
    console.log(_id);
    console.log(newUsersAfterDeletion);
  };

  const openNotify = () => {
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
        // axios.get("http");
        console.log("Data has been sent SUCCESSfully - handleSubmit", res);
        notification.success({
          message: "Submitted Succesfully",
          description: "Saved Successfully in Database",
          placement: "topRight",
        });
        setuseEffect(!triggerUseEffect);
      })
      .catch((err) => {
        console.log("Internal Server Error - handleSubmit", err);
        notification.error({
          message: "Error",
          description: "Error in HandleSubmit - Axios POST",
          placement: "topRight",
        });
      });

    setFullName("");
    setRegNo("");
    setDept("");
    setEmail("");
  };

  const updateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`${baseURL}/api/update/all-users`, {
        id: selectedUserData._id,
        updatedUserData: selectedUserData,
      })
      .then((res) => {
        console.log(res);
        setIsModalVisible(false);
        setuseEffect(!triggerUseEffect);
      })
      .catch((err) => {
        console.log("Error in updateHandler", err);
      });
    console.log(selectedUserData);
  };

  return (
    <div>
      <form onSubmit={() => handleSubmit} className="p-24">
        <button onClick={openNotify}>Notify</button>
        <div>
          <label>Full Name</label>
          <input
            // value={fullName}
            name={"fullName"}
            type={"text"}
            placeholder={"Ex: Akbar Sha S"}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Register Number</label>
          <input
            // value={regNo}
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
            // value={dept}
            type="text"
            placeholder={"Ex: Department of BCA"}
            onChange={(e) => setDept(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name={"email"}
            // value={email}
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
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td className="w-56 text-center">{index + 1}</td>
                  <td className="w-56 text-center">{user.fullName}</td>
                  <td className="w-40 text-center">{user.regNo}</td>
                  <td className="w-56 text-center">{user.email}</td>
                  <td className="w-56 text-center">{user.createdAt}</td>
                  <td className="w-40 text-center">
                    <button
                      onClick={() => {
                        setSelectedUserData(user);
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
            key="update"
            type="primary"
            // loading={loading}
            onClick={() => updateHandler}
          >
            Update
          </Button>,
        ]}
      >
        {console.log(selectedUserData)}
        <section>
          <form onSubmit={updateHandler}>
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
              value={selectedUserData !== null ? selectedUserData.fullName : ""}
            />
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
