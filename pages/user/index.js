import axios from "axios";
// import res from "express/lib/response";
// import res from "express/lib/response";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import { notification } from "antd";
import { Modal, Button } from "antd";
// import baseURL from "../../Helpers/Globals";
const baseURL = "http://localhost:1000";

function User() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Error Retriving data");

  const [selectedUserData, setSelectedUserData] = useState(null);
  const [triggerUseEffect, setUseEffect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [fullName, setFullName] = useState("");
  // const [regNo, setRegNo] = useState("");
  // const [dept, setDept] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const router = useRouter();

  // const setUpdateID = (id, fullName, regNo, dept, email) => {
  //   router.push("/update");
  //   console.log(id);
  //   console.log(fullName);
  //   console.log(regNo);
  //   console.log(dept);
  //   console.log(email);
  //   localStorage.setItem("User - ID", id);
  //   localStorage.setItem("User - FullName", fullName);
  //   localStorage.setItem("User - regNo", regNo);
  //   localStorage.setItem("User - dept", dept);
  //   localStorage.setItem("User - email", email);
  // };
  // const setDeleteID = (id) => {
  //   router.push("/delete");
  //   console.log(id);
  //   // localStorage.setItem("User - ID", id);
  // };
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
        // const data = res;
        setUsers(res.data.data);
        console.log("Data has been received", res.data.data);
      })
      .catch((err) => {
        console.log("Error in getUsers", err);
      });
  }, [triggerUseEffect]);

  console.log(users);

  return (
    <div>
      <h1>Single User page</h1>

      <section className="flex flex-wrap">
        {/* {users.map((user) => {})} */}
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user._id} className="">
              <td className="w-56 text-center">{index + 1}</td>
              <td className="w-56 text-center">{user.fullName}</td>
              <td className="w-40 text-center">{user.regNo}</td>
              <td className="w-56 text-center">{user.roomNo}</td>
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
        {/* {users.map((person) => {
          return (
            <div
              key={person._id}
              className="relative flex items-center flex-wrap border-2 rounded-lg m-2 w-96"
            >
              <div className="ml-5 flex items-center justify-center">
                <img />
                img
              </div>
              <div className="ml-10">
                <h1>{person.fullName}</h1>
                <h1>{person.regNo}</h1>
              </div>
              <div className="absolute top-0 right-0 border-[1px] rounded-full p-2">
                <button
                  onClick={() => deleteUser(person._id)}
                  // onClick={() => setDeleteID(person._id)}
                >
                  Del
                </button>
                <button
                  onClick={() =>
                    setUpdateID(
                      person._id,
                      person.fullName,
                      person.regNo,
                      person.dept,
                      person.email
                    )
                  }
                  className="ml-2"
                >
                  Upd
                </button>
              </div>
            </div>
          );
        })} */}
      </section>
      <section>
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
                  value={
                    selectedUserData !== null ? selectedUserData.regNo : ""
                  }
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
                  value={
                    selectedUserData !== null ? selectedUserData.email : ""
                  }
                />
              </div>
              <button>Update</button>
            </form>
          </section>
        </Modal>
      </section>
    </div>
  );
}

export default User;
