import React from "react";
import SingleUser from "../user/section/SingleUser";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import FormEmail from "../../src/Components/FormEmail";

// function View({ selectedUserData, setSelectedUserData }) {
function View() {
  // console.log(selectedUserData);

  // https://github.com/vercel/next.js/tree/canary/examples/using-router
  // https://github.com/vercel/next.js/tree/canary/examples/using-router

  const router = useRouter();
  // const { fullName } = router.query;
  // console.log("Router.query", router.query);
  // if (!selectedUserData) {
  //   return null;
  // }
  return (
    <main
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 10.6vh)", width: "calc(100vw - 0rem)" }}
    >
      {/* <div>View</div>
      <div>{router.query.regNo}</div>
      <div>{router.query.fullName}</div>
      <div></div>
      <div></div>
      <SingleUser
      // selectedUserData={selectedUserData}
      // setSelectedUserData={setSelectedUserData}
      /> */}
      <FormEmail />
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

export default withRouter(View);
