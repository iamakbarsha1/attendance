import React, { useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  BiDotsVerticalRounded,
  BiHomeAlt,
  BiEnvelopeOpen,
  BiDoorOpen,
} from "react-icons/bi";
import { BsPeople, BsPlusCircle } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FiPlusCircle, FiLogOut } from "react-icons/fi";
import { Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

import jwt_decode from "jwt-decode";
import { setToken } from "../redux/features/tokenSlice";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  const [loggedin, setLoggedin] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  const [showStudentsMenu, setShowStudentsMenu] = useState(false);
  const [isAddStudentModalVisible, setAddSudentModalVisible] = useState(false);

  const router = useRouter();

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    setLoggedin(false);
    setShowNavbar(false);
    router.push("/logIn");
  };
  const onRegisterClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/register");
      setShowNavbar(false);
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  };
  const onContactClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/contact");
      setShowNavbar(false);
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  };
  const onRoomClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/room");
      setShowNavbar(false);
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  };
  const onStudentsClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/user");
      setShowNavbar(false);
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  };
  const onHomeClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
      setShowNavbar(false);
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // dispatch(setToken(res.data.user));
    if (token) {
      const user = jwt_decode(token);
      // console.log(user);
      setLoggedin(true);
      if (!user) {
        localStorage.removeItem("token");
        // dispatch(setToken(null));
        setLoggedin(false);
        router.push("/logIn");
      }
    }
  }, [router]);

  return (
    <div
      className="sticky top-0 z-50 bg-slate-300 flex justify-between px-3 md:px-7 py-2 md:py-4 bg-white shadow-md"
      // onBlur={() => setShowNavbar(!showNavbar)}
    >
      {/* Left */}
      <div className="lg:hidden relative flex justify-center items-center">
        <HiMenuAlt2
          className=" h-6 w-6"
          // className={showNavbar ? "-left-20" : null}
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <div
          className={
            showNavbar
              ? `absolute -top-2 md:-top-4 -left-3 flex-row h-screen z-50 w-60 p-4 bg-white shadow-lg transition-all ease-in-out duration-500`
              : `absolute -top-2 md:-top-4 -left-80 flex-row h-screen z-50 w-60 p-4 bg-white shadow-lg transition-all ease-in-out duration-500`
            //   `absolute top-0 -left-0 w-72 bg-white -translate-x-80`
            // : `absolute top-0 -left-80 w-72 bg-white translate-x-0`
          }
        >
          <div className="flex justify-end">
            <MdClose
              className={`h-6 w-6 text-purple-700`}
              onClick={() => setShowNavbar(!showNavbar)}
            />
          </div>
          <div>
            <ul className="text-lg space-y-3 p-2 font-medium">
              <div onClick={onHomeClick} className="flex group cursor-pointer">
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiHomeAlt className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Home</li>
                </div>
              </div>
              <div onClick={onRoomClick} className="flex group cursor-pointer">
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Rooms</li>
                </div>
              </div>
              <div
                onClick={onStudentsClick}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BsPeople className="h-5 w-5 stroke-[0.4] " />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Students</li>
                </div>
              </div>
              <div
                onClick={onContactClick}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiEnvelopeOpen className="h-5 w-5" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Contact</li>
                </div>
              </div>
              <div
                onClick={onRegisterClick}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <FiPlusCircle className="h-5 w-5" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Register</li>
                </div>
              </div>
              {loggedin ? (
                <div
                  onClick={onLogoutClick}
                  className="flex group cursor-pointer"
                >
                  <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                    <FiLogOut className="h-5 w-5" />
                  </div>
                  <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                    <li className="">Logout</li>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    onLogoutClick();
                    setShowNavbar(false);
                  }}
                  className="flex group cursor-pointer"
                >
                  <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                    <FiLogOut className="h-5 w-5" />
                  </div>
                  <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                    <li className="">Login</li>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
        {/* <Menu>
          <Menu.Item>Menu</Menu.Item>
          <SubMenu title="SubMenu">
            <Menu.Item>SubMenuItem</Menu.Item>
          </SubMenu>
        </Menu> */}
      </div>

      {/* Middle */}
      <div className="font-bold text-base flex items-center">Practice</div>
      <div className="flex">
        <div className="hidden lg:flex">
          <div className="flex items-center justify-evenly font-medium text-base">
            <div onClick={onHomeClick} className="cursor-pointer">
              Home
            </div>
            <div className="group">
              <div
                // onMouseEnter={() => setShowStudentsMenu(true)}
                // onMouseLeave={() => setShowStudentsMenu(false)}
                className="group lg:relative lg:cursor-pointer ml-10"
              >
                <div onClick={onStudentsClick}>Students</div>
              </div>
            </div>

            <div onClick={onRoomClick} className="lg:ml-10 cursor-pointer">
              Rooms
            </div>
            {/* <div className="lg:ml-10 cursor-pointer">Reports</div> */}
            <div onClick={onContactClick} className="lg:ml-10 cursor-pointer">
              Contact
            </div>
            <div onClick={onRegisterClick} className="lg:ml-10 cursor-pointer">
              Register
            </div>
            {loggedin ? (
              <div
                onClick={onLogoutClick}
                className="flex items-center justify-center lg:ml-10 cursor-pointer text-purple-700"
              >
                Logout
              </div>
            ) : (
              <div
                onClick={() => router.push("/logIn")}
                className="flex items-center justify-center lg:ml-10 cursor-pointer text-purple-700"
              >
                Login
              </div>
            )}
            {/* <div className="lg:ml-10 cursor-pointer">Signup</div> */}
          </div>
        </div>
        {/* Right */}
        {/* <div className="hidden lg:block lg:ml-20">
          <BiDotsVerticalRounded className="h-6 w-6" />
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
