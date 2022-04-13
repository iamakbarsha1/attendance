import React from "react";
import SingleUser from "../user/section/SingleUser";

function View({ selectedUserData, setSelectedUserData }) {
  console.log(selectedUserData);
  return (
    <main>
      <div>View</div>
      <SingleUser
        selectedUserData={selectedUserData}
        setSelectedUserData={setSelectedUserData}
      />
    </main>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       selectedUserData,
//     },
//   };
// }

export default View;
