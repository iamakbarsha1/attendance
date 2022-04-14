import React from "react";
import SingleUser from "../user/section/SingleUser";
import { useRouter } from "next/router";

// function View({ selectedUserData, setSelectedUserData }) {
function View() {
  // console.log(selectedUserData);
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router

  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  https://github.com/vercel/next.js/tree/canary/examples/using-router
  const router = useRouter();
  const { selectedUserData } = router.query;
  console.log(router.query);
  // if (!selectedUserData) {
  //   return null;
  // }
  return (
    <main>
      <div>View{selectedUserData}</div>
      <SingleUser
      // selectedUserData={selectedUserData}
      // setSelectedUserData={setSelectedUserData}
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
