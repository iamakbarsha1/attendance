import Password from "antd/lib/input/Password";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";

function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.User.value);
  const dispatch = useDispatch();
  console.log(email);
  console.log(Password);

  return (
    <div>
      <div>
        <label>Email</label>
        <input
          value={email}
          type={"text"}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-[2px] bg-slate-300"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          type={"text"}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-[2px] bg-slate-300"
        />
      </div>
      <button onClick={() => dispatch(login({ email, password }))}>
        Login
      </button>
      {/* <div>{user.email}</div>
      <div>{user.password}</div> */}
    </div>
  );
}

export default LoginInput;
