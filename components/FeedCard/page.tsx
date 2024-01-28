import React from "react";
import Image from "next/image";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Tweet } from "@/gql/graphql";

interface FeedCardProps {
  data: Tweet; //this type comes from gql because of codegen ( get from backend)
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
  const { data } = props;
  return (
    <div className="border border-gray-800 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 trasition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          {data.author?.profileImageURL && (
            <Image
              className="rounded-full"
              src={data.author?.profileImageURL}
              alt="user-image"
              height={50}
              width={50}
            />
          )}
        </div>
        <div className="col-span-11">
          <h5>
            {data.author?.firstName} {data.author?.lastName}
          </h5>
          <p>{data.content}</p>
          {/* <div className="">
          {data.imageURL && (
            <Image
              src={data.imageURL}
              alt="tweet-image"
              
            />
          )}
        </div> */}
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            {/* message, retweet, heart, upload */}
            <div>
              <TbMessageCircle />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <IoMdHeartEmpty />
            </div>
            <div>
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
