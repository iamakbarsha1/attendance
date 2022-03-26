import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Menu } from "antd";

function NavBar() {
  return (
    <div className="flex justify-between px-3 py-2 bg-slate-400">
      {/* Left */}
      <div>
        <HiMenuAlt2 />
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
      <div>Help</div>
    </div>
  );
}

export default NavBar;
