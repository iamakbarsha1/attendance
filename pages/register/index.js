import React from "react";
import RegisterInput from "./section/registerInput";

function Register() {
  // const user = useSelector((state) => state.User.value);
  return (
    <main
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 10.6vh)", width: "calc(100vw - 0rem)" }}
    >
      <RegisterInput />
    </main>
  );
}

export default Register;
