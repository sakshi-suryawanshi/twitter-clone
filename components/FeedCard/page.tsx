import React from "react";
import Image from "next/image";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-800 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 trasition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Sakshi Suryawanshi</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            facilis dicta perferendis consequatur aliquam provident nihil omnis,
            doloremque, quibusdam veniam blanditiis, maxime iure qui assumenda
            minima molestias corrupti! Deleniti iusto libero.
          </p>
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
