import React from "react";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    //  const target = e.target;
    //  const name = target.name;
    //  const value = target.value;

    //  setEmail({
    //    [name]: value,
    //  });
    //  setPassword({
    //    [name]: value,
    //  });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(setEmail);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-24">
        <label htmlFor="email">Email Address</label>
        <input
          type={"email"}
          id={"email"}
          placeholder="email"
          name="email"
          //  value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-slate-300`}
        />
        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          id={"password"}
          placeholder="password"
          name="password"
          //  value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`bg-slate-300`}
        />
        <button id="submit" className="bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
