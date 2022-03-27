import axios from "axios";
// import res from "express/lib/response";
// import res from "express/lib/response";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import baseURL from "../../Helpers/Globals";
const baseURL = "http://localhost:1000";

function User() {
  const [user, setUser] = useState([]);

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

  return (
    <div>
      <h1>Single User page</h1>
      <div className="flex flex-wrap">
        {user.map((person) => {
          return (
            <div className="relative flex items-center flex-wrap border-2 rounded-lg m-2 w-96">
              <div className="ml-5 flex items-center justify-center">
                <img />
                img
              </div>
              <div className="ml-10">
                <h1>{person.fullName}</h1>
                <h1>{person.regNo}</h1>
              </div>
              <div className="absolute top-0 right-0 border-[1px] rounded-full p-2">
                <button>Del</button>
                <button className="ml-2">Upd</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;
