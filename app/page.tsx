"use client";

import { link } from "fs";
import { useState, useEffect, useCallback } from "react";

import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { HiHome } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard/page";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { GraphQLBoolean } from "graphql";
import { GraphqlClient } from "@/clients/api";
import { verifyUserGoolgeTokenQuery } from "@/graphql/query/user";
import { AppWrapper } from "./appWrapper";
import { useCurrentUser } from "@/hooks/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
// import Script from "next/script";
{
  /* <Script
  src="./appWrapper"
  strategy="afterInteractive" // Load the script after the page is interactive
/>; */
}

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

function Home() {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      // will sent this credential to backend and it will sent me customized token
      const googleToken = cred.credential;

      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await GraphqlClient.request(
        verifyUserGoolgeTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);

      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
    [queryClient]
  );

  return (
    <div
      className="grid grid-cols-12 h-screen w-screen px-56 "
      suppressHydrationWarning={true}
    >
      {/* menu bar */}
      <div className="col-span-3 pt-3 relative">
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
        {user && (
          <div className="absolute bottom-5 flex gap-2 items-center bg-slate-800 p-3 rounded-full m-2">
            {user && user?.profileImageURL && (
              <Image
                className="rounded-full"
                src={user?.profileImageURL}
                alt="user-image"
                height={50}
                width={50}
              />
            )}
            <div>
              <h3 className="text-xl">
                {user.firstName} {user.lastName}
              </h3>
            </div>
          </div>
        )}
      </div>

      {/* feed */}
      <div className="col-span-6 border border-t-0 border-b-0 border-slate-800 h-screen overflow-auto">
        <div>
          <div className="border border-gray-800 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 trasition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1">
                {user && user.profileImageURL && (
                  <Image
                    className="rounded-full"
                    src={user?.profileImageURL}
                    alt="user-image"
                    height={50}
                    width={50}
                  />
                )}
              </div>
              <div className="col-span-11">
                <textarea
                  className="w-full bg-transparent text-xl px-3 border-b border-slate-800 "
                  placeholder="What's happening?"
                  rows={2}
                  name=""
                  id=""
                ></textarea>
                <div className="mt-2 flex justify-between items-center">
                  <CiImageOn onClick={handleSelectImage} className="text-2xl" />

                  <button className=" bg-[#1d9bf0] font-semibold text-sm py-[1.8px] px-4 rounded-full ">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>

      {/* Other activities */}
      <div className="col-span-3 p-5">
        {!user && (
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="">New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div>
          <AppWrapper>
            <Home />
          </AppWrapper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
