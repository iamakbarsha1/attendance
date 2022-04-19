import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BiDotsVerticalRounded, BiHomeAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showStudentsMenu, setShowStudentsMenu] = useState(false);
  const [isAddStudentModalVisible, setAddSudentModalVisible] = useState(false);

  const router = useRouter();

  return (
    <div
      className="sticky top-0 z-50 flex justify-between px-3 py-2 md:py-4 bg-slate-400 md:bg-red-300 lg:bg-green-400 shadow-md"
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
              ? `absolute -top-4 -left-3 flex-row h-screen z-50 w-60 p-4 bg-white transition-all ease-in-out duration-500`
              : `absolute -top-4 -left-80 flex-row h-screen z-50 w-60 p-4 bg-white transition-all ease-in-out duration-500`
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
              <div
                onClick={() => {
                  router.push("/");
                  setShowNavbar(false);
                }}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiHomeAlt className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Home</li>
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/room");
                  setShowNavbar(false);
                }}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Rooms</li>
                </div>
              </div>
              {/* <div className="flex group">
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Students</li>
                </div>
              </div> */}
              <div
                onClick={() => {
                  router.push("/user");
                  setShowNavbar(false);
                }}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Students</li>
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
            <div
              onClick={() => {
                router.push("/");
              }}
              className="cursor-pointer"
            >
              Home
            </div>
            <div className="group">
              <div
                // onMouseEnter={() => setShowStudentsMenu(true)}
                // onMouseLeave={() => setShowStudentsMenu(false)}
                className="group lg:relative lg:cursor-pointer ml-10"
              >
                <div onClick={() => router.push("/user")}>Students</div>
              </div>
              {/* <section className="lg:group-hover:block lg:hidden lg:z-50 lg:absolute lg:top-16 lg:right-[16.5rem] lg:px-3 lg:py-2 lg:space-y-2 lg:rounded-lg lg:transform lg:transition-all lg:ease-in-out lg:duration-700  lg:bg-gray-200">
                <div
                  onClick={() => router.push("/user")}
                  className="lg:hover:bg-purple-700 lg:hover:text-white lg:p-2 lg:rounded-lg lg:cursor-pointer"
                >
                  Student List
                </div>
                <div
                  // onClick={() => setAddSudentModalVisible(true)}
                  className="lg:hover:bg-purple-700 lg:hover:text-white lg:p-2 lg:rounded-lg lg:cursor-pointer"
                >
                  Add Student
                </div>
              </section> */}
              {/* <section className="lg:hidden group-hover:block lg:absolute lg:top-16 bg-slate-400"> */}
              {/* {showStudentsMenu ? "" : ""} */}
            </div>

            <div
              onClick={() => router.push("/room")}
              className="lg:ml-10 cursor-pointer"
            >
              Rooms
            </div>
            <div className="lg:ml-10 cursor-pointer">Reports</div>
            <div
              onClick={() => router.push("/logIn")}
              className="lg:ml-10 cursor-pointer"
            >
              Login
            </div>
            <div className="lg:ml-10 cursor-pointer">Signup</div>
          </div>
        </div>
        {/* Right */}
        <div className="hidden lg:block lg:ml-20">
          <BiDotsVerticalRounded className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
