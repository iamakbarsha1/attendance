import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-between px-3 py-2 bg-slate-400">
      {/* Left */}
      <div className="relative flex justify-center items-center">
        <HiMenuAlt2
          // className={showNavbar ? "-left-20" : null}
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <div
          className={
            showNavbar ? `absolute top-0 -left-3 w-72 bg-white` : `hidden `
          }
        >
          <MdClose className={``} onClick={() => setShowNavbar(!showNavbar)} />
          <ul>
            <li>Rooms</li>
            <li>Students</li>
          </ul>
        </div>
        {/* <Menu>
          <Menu.Item>Menu</Menu.Item>
          <SubMenu title="SubMenu">
            <Menu.Item>SubMenuItem</Menu.Item>
          </SubMenu>
        </Menu> */}
      </div>
      {/* Middle */}
      <div>Practice</div>
      {/* Right */}
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/user")}>User</div>
      <div onClick={() => router.push("/")}>Add</div>
    </div>
  );
}

export default NavBar;
