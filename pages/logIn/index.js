import React from "react";
import FormInput from "../signUp/section/FormInput";
import LoginInput from "./section/LoginInput";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.User.value);
  return (
    <div>
      <h1>Login Page</h1>
      <LoginInput user={user} />
    </div>
  );
}

export default Login;
