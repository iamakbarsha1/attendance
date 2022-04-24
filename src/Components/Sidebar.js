import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { BiDoorOpen } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdClose } from "react-icons/md";
const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

import { Collapse } from "antd";

const { Panel } = Collapse;

function Sidebar() {
  const router = useRouter();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [showDropdown, setShowDropdown] = useState(false);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div>
      <div>Sidebar</div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Rooms">
          <Menu.Item
            key="1"
            className="flex"
            icon={<AppstoreOutlined />}
            // className="flex items-center justify-start ml-8 p-2 font-normal text-lg active:bg-green-400"
          >
            Rooms
          </Menu.Item>

          <Menu.Item key="2" icon={<PlusOutlined />}>
            Add Room
          </Menu.Item>
          {/* <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item> */}
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Students">
          <Menu.Item
            key="1"
            className="flex"
            icon={<AppstoreOutlined />}
            // className="flex items-center justify-start ml-8 p-2 font-normal text-lg active:bg-green-400"
          >
            Student List
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusOutlined />}>
            Add Student
          </Menu.Item>
          {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
      {/* <main>
        <section
          style={{ height: "calc(100vh - 40px)" }}
          className="h-screen w-48 bg-slate-700"
        >
          <div>
            <ul className="text-base text-white space-y-2 p-4 font-normal">
              <section
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
                className="flex items-center justify-start p-1 bg-white rounded-md text-slate-700"
              >
                <div className="flex items-center justify-center">
                  <BiDoorOpen className="h-6 w-6" />
                </div>
                <div>
                  <li className="ml-2">Rooms</li>
                </div>
              </section>

              <div
                className={
                  showDropdown
                    ? `absolute top-0 transition-all ease-in-out duration-600`
                    : `absolute -top-10 transition-all ease-in-out duration-600`
                }
              >
                <section className="flex items-center justify-start transition-all ease-in-out duration-500">
                  <div className="flex items-center justify-center">
                    <BiDoorOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <li
                      onClick={() => {
                        router.push("/room");
                      }}
                      className="ml-2"
                    >
                      Rooms List
                    </li>
                  </div>
                </section>
                <section className="flex items-center justify-start transition-all ease-in-out duration-500">
                  <div className="flex items-center justify-center">
                    <BiDoorOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <li
                      onClick={() => {
                        router.push("/room");
                      }}
                      className="ml-2"
                    >
                      Add Room
                    </li>
                  </div>
                </section>
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
                  //  setShowNavbar(false);
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
                  //  setShowNavbar(false);
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
                  //  setShowNavbar(false);
                }}
              >
                Add
              </li>
            </ul>
          </div>
        </section>
      </main> */}
    </div>
  );
}

export default Sidebar;
