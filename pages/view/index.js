import React, { useState, useEffect } from "react";
// import baseURL from "../../Helpers/Globals";
const baseURL = "http://localhost:1000";

function View({ selectedUserData }) {
  //   const { createdAt, dept, email, fullName, regNo, updatedAt, __v, _id } =
  //  selectedUserData;
  //   const [selectedUserData, setSelectedUserData] = useState(null);

  const [triggerUseEffect, setUseEffect] = useState(false);

  // get All Users
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

  console.log(selectedUserData);

  return (
    <main>
      {JSON.stringify(selectedUserData)}
      <div>{selectedUserData}</div>
      <div>Hello View Page</div>
    </main>
  );
}

export default View;
