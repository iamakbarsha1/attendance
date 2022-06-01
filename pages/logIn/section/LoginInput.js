// import Password from "antd/lib/input/Password";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { setToken } from "../../../src/redux/features/tokenSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../../features/userSlice";

// function LoginInput({ user }) {
function LoginInput() {
  // const dispatch = useDispatch();
  const router = useRouter();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email);
  // console.log(Password);

  // const sendEmailHandler = (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     name,
  //     msg,
  //     email,
  //   };
  //   axios
  //     .post(`/api/post/sendEmail`, payload)
  //     .then((res) => {
  //       console.log(payload);
  //       console.log("Server Received Payload Details");
  //       notification.success({
  //         message: "Email Sent Successfully",
  //         description: "Thankyou for your response! ❤️",
  //       });
  //       setName("");
  //       setMsg("");
  //       setEmail("");
  //     })
  //     .catch((err) => {
  //       console.log("Internal Server Error - sendEmailHandler", err);
  //     });
  // };

  const LoginHandler = (e) => {
    e.preventDefault();

    const LoginData = {
      email,
      password,
    };
    axios
      .post(
        "/api/post/login",
        LoginData
        // , {
        // headers: { Authorization: `Bearer ${token}` },
        // }
      )
      .then((res) => {
        console.log(LoginData);
        // console.log(res.data.user);
        // const token = res.data.user;
        console.log("Login Successfull");

        if (res.data.user) {
          localStorage.setItem("token", res.data.user);
          // dispatch(setToken(res.data.user));
          console.log("login Succesful");
          // navigate("/addBooking");
          router.push("/");
          notification.success({
            message: "Success",
            description: "Loggedin Successfully",
            placement: "topRight",
          });
        } else {
          notification.error({
            message: "Error",
            description: "Incorrect Email, Password! or Register First!",
            placement: "topRight",
          });
        }
      })
      .catch((err) => {
        console.log("Error in LoginHandler", err);
      });
  };

  return (
    <main className="flex items-center justify-center">
      <section className="flex-row items-center justify-center">
        <div>
          <h1 className="w-72 flex items-center justify-center text-4xl">
            Login
          </h1>
        </div>
        <div>
          <form onSubmit={LoginHandler} className="flex flex-col ">
            <div className="pb-5 pt-5">
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
            <div className="pb-5">
              <input
                type={"text"}
                placeholder={"Enter your Password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full rounded-lg focus:border-purple-700 outline-none p-3"
              />
            </div>

            <div>
              <button
                id="submit"
                className="w-full p-3 rounded-md border-[1px] text-white bg-purple-700 font-medium focus:bg-white focus:border-green-400 focus:text-green-400"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginInput;
