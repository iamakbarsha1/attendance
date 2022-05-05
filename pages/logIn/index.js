import React from "react";
import LoginInput from "./section/LoginInput";
// import FormInput from "../signUp/section/FormInput";
// import { useSelector } from "react-redux";

function Login() {
  // const user = useSelector((state) => state.User.value);
  return (
    <div>
      <h1>Login Page</h1>
      {/* <LoginInput user={user} /> */}
      <LoginInput />
    </div>
  );
}

export default Login;
