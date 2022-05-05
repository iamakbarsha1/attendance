import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import {
  BiDotsVerticalRounded,
  BiHomeAlt,
  BiEnvelopeOpen,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io";
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
      className="sticky top-0 z-50 flex justify-between px-3 md:px-7 py-2 md:py-4 bg-white shadow-md"
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
              <div
                onClick={() => {
                  router.push("/user");
                  setShowNavbar(false);
                }}
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
                onClick={() => {
                  router.push("/contact");
                  setShowNavbar(false);
                }}
                className="flex group cursor-pointer"
              >
                <div className="flex items-center justify-center p-2 group-hover:bg-purple-700 group-hover:rounded-l-lg group-hover:text-white">
                  <BiEnvelopeOpen className="h-5 w-5" />
                </div>
                <div className="flex-grow p-2 group-hover:bg-purple-700 group-hover:rounded-r-lg group-hover:text-white">
                  <li className="">Contact</li>
                </div>
              </div>

              {/* <li
                onClick={() => {
                  router.push("/");
                  setShowNavbar(false);
                }}
              >
                Add
              </li> */}
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
            </div>

            <div
              onClick={() => router.push("/room")}
              className="lg:ml-10 cursor-pointer"
            >
              Rooms
            </div>
            {/* <div className="lg:ml-10 cursor-pointer">Reports</div> */}
            <div
              onClick={() => router.push("/contact")}
              className="lg:ml-10 cursor-pointer"
            >
              Contact
            </div>
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
