// import Password from "antd/lib/input/Password";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../../features/userSlice";

function LoginInput({ user }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email);
  // console.log(Password);

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
      {/* <button onClick={() => dispatch(setUser({ email, password }))}> */}
      <button>Login</button>
      {user && (
        <section>
          <div>{user.email}</div>
          <div>{user.password}</div>
        </section>
      )}
    </div>
  );
}

export default LoginInput;
