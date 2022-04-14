import React, { useState } from "react";

function SingleUser({ selectedUserData }) {
  // const { createdAt, dept, email, fullName, regNo, updatedAt, __v, _id } =
  //   selectedUserData;
  // const { fullName } = selectedUserData;

  // const [selectedUserData, setSelectedUserData] = useState(null);

  return (
    <main>
      <div>SingleUserPage</div>
      {/* <h1>{fullName}</h1> */}
      {/* <h1>Akbar Sha S {selectedUserData.fullName}</h1> */}
      <h1>Akbar Sha S</h1>
      <h1>
        {/* {selectedUserData !== null ? selectedUserData.fullName : "Akbar Sha S"} */}
      </h1>
    </main>
  );
}

export default SingleUser;
