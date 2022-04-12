import React from "react";

function SingleUserPage({ selectedUserData }) {
  const { createdAt, dept, email, fullName, regNo, updatedAt, __v, _id } =
    selectedUserData;
  //   const { fullName }

  return (
    <main>
      <div>SingleUserPage</div>
      <h1>{fullName}</h1>
    </main>
  );
}

export default SingleUserPage;
