import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  return (
    <div
      className="flex justify-between px-3 py-2 bg-slate-400  md:bg-red-300 lg:bg-green-400"
      onBlur={() => setShowNavbar(!showNavbar)}
    >
      {/* Left */}
      <div className="relative flex justify-center items-center">
        <HiMenuAlt2
          className="md:hidden h-6 w-6"
          // className={showNavbar ? "-left-20" : null}
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <div
          className={
            showNavbar
              ? `absolute -top-2 -left-3 flex-row w-72 p-4 bg-white transition-all ease-in-out duration-500`
              : `absolute -top-2 -left-80 w-72 bg-white transition-all ease-in-out duration-500`
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
            <ul className="text-lg space-y-2 p-4 font-medium">
              <div className="flex">
                <div className="flex items-center justify-center">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div>
                  <li className="ml-2">Rooms</li>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center justify-center">
                  <BsPeople className="h-6 w-6" />
                </div>
                <div>
                  <li className="ml-2">Students</li>
                </div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  router.push("/");
                  setShowNavbar(false);
                }}
              >
                <div className="flex items-center justify-center">
                  <BsPeople className="h-6 w-6" />
                </div>
                <div>
                  <li className="ml-2">Home</li>
                </div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  router.push("/user");
                  setShowNavbar(false);
                }}
              >
                <div className="flex items-center justify-center">
                  <BsPeople className="h-6 w-6" />
                </div>
                <div>
                  <li className="ml-2">User</li>
                </div>
              </div>
              <li
                onClick={() => {
                  router.push("/");
                  setShowNavbar(false);
                }}
              >
                Add
              </li>
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
      <div className="font-bold text-base ">Practice</div>
      {/* Right */}
      <div>Three-Dots</div>
    </div>
  );
}

export default NavBar;
