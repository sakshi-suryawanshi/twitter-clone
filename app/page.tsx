"use client";

import { link } from "fs";
import Image from "next/image";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { HiHome } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard/page";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <HiHome />,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
  },
  {
    title: "Notifications",
    icon: <GoBell />,
  },
  {
    title: "Messages",
    icon: <MdOutlineEmail />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56 ">
      {/* menu bar */}
      <div className="col-span-3 pt-3">
        {/* logo */}
        <div className="text-4xl hover:bg-gray-900 p-3 rounded-full h-fit w-fit cursor-pointer transition-all">
          <BsTwitterX className="" />
        </div>
        {/* Menu List */}
        <div className="text-lg font-semibold pr-6">
          <ul>
            {sideBarMenuItems.map((item) => (
              <li
                className=" mt-5 flex justify-start items-center gap-3 hover:bg-gray-900 px-5 py-2  rounded-full w-fit h-fit cursor-pointer transition-all"
                key={item.title}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          {/* Tweet Button */}
          <div className=" mt-5 px-2">
            <button className=" bg-[#1d9bf0] font-semibold text-lg w-full rounded-full p-3">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* feed */}
      <div className="col-span-6 border border-t-0 border-b-0 border-slate-800 h-screen overflow-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>

      {/* Other activities */}
      <div className="col-span-3">Activity</div>
    </div>
  );
}
