import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showStudentsMenu, setShowStudentsMenu] = useState(false);

  const router = useRouter();

  return (
    <div
      className="flex justify-between px-3 py-2 md:py-4 lg:py-5 bg-slate-400 md:bg-red-300 lg:bg-green-400 shadow-md"
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
              ? `absolute -top-2 -left-3 flex-row h-screen z-50 w-72 p-4 bg-white transition-all ease-in-out duration-500`
              : `absolute -top-2 -left-80 flex-row h-screen z-50 w-72 p-4 bg-white transition-all ease-in-out duration-500`
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
      <div className="font-bold text-base flex items-center">Practice</div>

      <div className="flex">
        <div className="hidden lg:flex">
          <div className="flex items-center justify-evenly font-medium text-base">
            <div className="cursor-pointer">Home</div>
            <div className="group">
              <div
                onMouseEnter={() => setShowStudentsMenu(true)}
                onMouseLeave={() => setShowStudentsMenu(false)}
                className="lg:relative lg:cursor-pointer hover:text-yellow-600 ml-10 "
              >
                <div>Students</div>
              </div>
              {/* <section className="lg:hidden group-hover:block lg:absolute lg:top-16 bg-slate-400"> */}
              {showStudentsMenu ? (
                <section className=" lg:absolute lg:top-16 bg-slate-400">
                  <div>Add Student</div>
                  <div>Add Student</div>
                  <div>Add Student</div>
                  <div>Add Student</div>
                  <div>Add Student</div>
                </section>
              ) : (
                ""
              )}
            </div>

            <div className="lg:ml-10 cursor-pointer">Rooms</div>
            <div className="lg:ml-10 cursor-pointer">Reports</div>
          </div>
        </div>
        {/* Right */}
        <div className="lg:ml-20">
          <BiDotsVerticalRounded className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
