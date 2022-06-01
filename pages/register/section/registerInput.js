// import Password from "antd/lib/input/Password";
import { notification } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../../features/userSlice";

// function LoginInput({ user }) {
function RegisterInput() {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const OnShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const OnShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const RegisterHandler = (e) => {
    e.preventDefault();

    console.log("Hello");
    const Data = {
      name,
      email,
      password,
      confirmPassword,
    };
    axios
      .post("/api/post/register", Data)
      .then((res) => {
        console.log("Response in RegisterHandler", res.data);
        console.log("Registered - Success");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        if (res.data.status === "Registered Sucessfully") {
          //   navigate("/login");
          router.push("/logIn");
          notification.success({
            message: res.data.key,
            description: res.data.status,
            placement: "topRight",
          });
        } else {
          notification.error({
            message: res.data.key,
            description: res.data.status,
            placement: "topRight",
          });
        }
      })
      .catch((err) => {
        console.log("Error in RegisterHandler", err);
        notification.error({
          message: "Error",
          description: "Error in RegisterHandler",
          placement: "topRight",
        });
      });
  };

  return (
    <main className="flex items-center justify-center">
      <section className="flex-row items-center justify-center">
        <div>
          <h1 className="w-72 flex items-center justify-center text-4xl">
            Register
          </h1>
        </div>
        <div>
          <form onSubmit={RegisterHandler} className="flex flex-col ">
            <div className="pb-5 pt-5">
              <input
                type={"text"}
                placeholder={"Enter your Name"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full rounded-lg focus:border-purple-700 outline-none p-3"
              />
            </div>
            <div className="pb-5">
              <input
                type={"email"}
                placeholder={"Enter your Email"}
                value={email}
                // pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full rounded-lg focus:border-purple-700 outline-none p-3"
              />
            </div>
            <div className="pb-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={"Enter your Password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full rounded-lg focus:border-purple-700 outline-none p-3"
              />
              {showPassword ? (
                <IoEyeOffOutline
                  className="eyeicon h-5 w-5 text-primary absolute top-[0.9rem] right-[1rem] active:text-secondary"
                  onClick={OnShowPassword}
                />
              ) : (
                <IoEyeOutline
                  className="eyeicon h-5 w-5 text-primary absolute top-[0.9rem] right-[1rem] active:text-secondary"
                  onClick={OnShowPassword}
                />
              )}
            </div>
            <div className="pb-5 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder={"Re-enter the Password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="w-full rounded-lg focus:border-purple-700 outline-none p-3"
              />
              {showConfirmPassword ? (
                <IoEyeOffOutline
                  className="eyeicon h-5 w-5 text-primary absolute top-[0.9rem] right-[1rem] active:text-secondary"
                  onClick={OnShowConfirmPassword}
                />
              ) : (
                <IoEyeOutline
                  className="eyeicon h-5 w-5 text-primary absolute top-[0.9rem] right-[1rem] active:text-secondary"
                  onClick={OnShowConfirmPassword}
                />
              )}
            </div>
            <div>
              <button
                id="submit"
                className="w-full p-3 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegisterInput;
