import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery, makeStyles } from "@mui/material";

import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import { notification } from "antd";
// import { Modal, Button } from "antd";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import View from "../view";
// import "flowbite";
// import baseURL from "../../Helpers/Globals";
const baseURL = "http://localhost:1000";

function User(props) {
  const is770pxBelow = useMediaQuery("(max-width:770px)");
  const is430pxBelow = useMediaQuery("(max-width:430px)");
  const is380pxBelow = useMediaQuery("(max-width:380px)");
  const is320pxBelow = useMediaQuery("(max-width:320px)");

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: is770pxBelow
      ? is430pxBelow
        ? is380pxBelow
          ? is320pxBelow
            ? 300
            : 330
          : 350
        : 600
      : 700,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: is430pxBelow ? "10px 20px 20px 20px" : "20px 30px 30px 30px",
  };

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
  // get All Users
  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/all-users`)
      .then((res) => {
        // const data = res;
        setUsers(res.data.data);
        console.log("Data has been received", res.data.data);
        setUseEffect(true);
      })
      .catch((err) => {
        console.log("Error in getUsers", err);
        setUseEffect(true);
      });
  }, [triggerUseEffect]);

  // console.log(users);
  console.log(selectedUserData);

  return (
    <div
      // style={{ height: "calc(100vh - 56px)" }}
      className="px-4 py-2 w-screen"
    >
      <section className=" flex items-center justify-between">
        <div className="font-medium text-xl lg:text-2xl text-purple-700">
          Students
        </div>
        {/* <label className="swap swap-rotate">
          <input className="hidden" type="checkbox" />
          <BiPlus className="swap-on fill-current w-10 h-10" />
          <FiEdit3 className="swap-off fill-current w-10 h-10" />
        </label> */}
        <div>
          <div
            onClick={handleOpen}
            className="border-[1px] p-1 lg:text-lg font-medium flex cursor-pointer text-purple-700 border-purple-700 rounded-md"
          >
            <div className="flex items-center justify-center">
              <BiPlus className="h-6 w-6" />
            </div>
            <div className="flex items-center">Add Student</div>
          </div>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style} className="relative">
              <section>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* <button onClick={openNotify}>Notify</button> */}
                    <div
                      onClick={handleClose}
                      className="absolute top-3 right-3 rounded-full hover:bg-purple-700 "
                    >
                      <MdClose className="h-7 w-7 text-purple-700 hover:text-white p-1" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                        Full Name
                      </label>
                      <input
                        required
                        value={fullName}
                        name={"fullName"}
                        type={"text"}
                        placeholder={"Ex: Akbar Sha S"}
                        onChange={(e) => setFullName(e.target.value)}
                        className="rounded-md w-full focus:border-purple-700 "
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                        Register Number
                      </label>
                      <input
                        value={regNo}
                        name={"regNo"}
                        type={"text"}
                        placeholder={"Ex: 1913181033035"}
                        onChange={(e) => setRegNo(e.target.value)}
                        className="rounded-md w-full focus:border-purple-700 "
                      />
                    </div>
                    <div className="block md:flex md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-3">
                      <div className="space-y-3 flex-grow">
                        <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                          Room Number
                        </label>
                        <br></br>
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
                          className="rounded-md w-full focus:border-purple-700 "
                        >
                          {allRooms.map((room, index) => (
                            <option value={room.roomNo}>{room.roomNo}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                          Department
                        </label>
                        <input
                          name={"dept"}
                          value={dept}
                          type="text"
                          placeholder={"Ex: Department of BCA"}
                          onChange={(e) => setDept(e.target.value)}
                          className="rounded-md w-full focus:border-purple-700 "
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-purple-700 font-medium md:text-base lg:text-lg">
                        Email
                      </label>
                      <input
                        name={"email"}
                        value={email}
                        type="text"
                        placeholder={"Ex: akbarsha@gmail.com"}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-md w-full focus:border-purple-700 "
                      />
                    </div>
                    <button
                      id="submit"
                      className="w-full px-2 py-3 space-y-4 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </section>
            </Box>
          </Modal>
        </div>
      </section>

      <section
        // style={{ height: "calc(100vh - 56px)" }}
        className="my-2 h-[80vh] md:h-[80vh] scrollbar-hide overflow-auto"
      >
        {/* <View /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div
                onClick={() => {
                  router.push(`/view/${user._id}`);
                  setSelectedUserData(user);
                }}
                key={user._id}
                className="relative justify-between bg-slate-100 shadow-md rounded-xl m-[4px] p-3 "
              >
                <section className="flex">
                  {/* <Image src={Student} /> */}
                  <div className="w-20 h-20 my-3 sm:my-5  bg-white rounded-full"></div>
                  <div className="ml-2 sm:ml-5 my-3 sm:my-5 flex-grow">
                    <div className="font-medium text-base text-purple-700">
                      {user.fullName}
                    </div>
                    <div className="">{user.regNo}</div>
                    <div className="text-green-700">{user.roomNo}</div>
                  </div>
                </section>
                <section>
                  {/* <div>
                      <div className=" text-center">{index + 1}</div>
                    </div> */}

                  {/* <div className="w-56 text-center">{user._id}</div> */}
                  {/* <td className="w-56 text-center">{user.createdAt}</td> */}
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <div className="">
                      <button
                        onClick={() => {
                          setSelectedUserData(user);
                          // router.push("/update");
                          setIsModalVisible(true);
                        }}
                      >
                        <FiEdit3 className="text-green-400" />
                      </button>
                    </div>
                    <div className="">
                      <button onClick={() => deleteUser(user._id)}>
                        <AiOutlineDelete className="text-red-600" />
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

{
  /* <label for="my-modal-3" class="btn modal-button">
          open modal
        </label> 

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">
              Congratulations random Interner user!
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div> 

         <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
        >
          Toggle modal
        </button>

        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex justify-end p-2">
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form
                class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                action="#"
              >
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div> */
}
