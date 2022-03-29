import axios from "axios";
// import res from "express/lib/response";
// import res from "express/lib/response";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
// import baseURL from "../../Helpers/Globals";
const baseURL = "http://localhost:1000";

function User() {
  const [user, setUser] = useState([]);
  // const [fullName, setFullName] = useState("");
  // const [regNo, setRegNo] = useState("");
  // const [dept, setDept] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [roomNo, setRoomNo] = useState("");

  const router = useRouter();

  const setUpdateID = (id, fullName, regNo, dept, email) => {
    router.push("/update");
    console.log(id);
    console.log(fullName);
    console.log(regNo);
    console.log(dept);
    console.log(email);
    localStorage.setItem("User - ID", id);
    localStorage.setItem("User - FullName", fullName);
    localStorage.setItem("User - regNo", regNo);
    localStorage.setItem("User - dept", dept);
    localStorage.setItem("User - email", email);
  };
  const setDeleteID = (id) => {
    router.push("/delete");
    console.log(id);
    localStorage.setItem("User - ID", id);
  };

  const deleteUser = (_id) => {
    const newUsersAfterDeletion = user.filter((newUser) => {
      return newUser._id !== _id;
    });
    setUser(newUsersAfterDeletion);
    console.log(_id);
    console.log(newUsersAfterDeletion);
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/api/get/all-users`)
      .then((res) => {
        const data = res.data;
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser]);

  // useEffect(() => {
  //   axios
  //     .delete(`${baseURL}/api/delete/all-users`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <h1>Single User page</h1>
      <div className="flex flex-wrap">
        {user.map((person) => {
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
                  // onClick={() => deleteUser(person._id)}
                  onClick={() => setDeleteID(person._id)}
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
        })}
      </div>
    </div>
  );
}

export default User;
