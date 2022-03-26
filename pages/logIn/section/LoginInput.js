import React from "react";
import { useState } from "react";

function LoginInput() {
  const [regNo, setRegNo] = useState("");

  return (
    <div>
      <div>Login</div>
      <div>
        <label>Regiater Number</label>
        <input
          type={"number"}
          name="regNo"
          onChange={(e) => setRegNo(e.target.value)}
          className="border-[2px] bg-slate-30000"
        />
      </div>
    </div>
  );
}

export default LoginInput;
