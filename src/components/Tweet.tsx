import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { BiShare } from "react-icons/bi";

function Tweet({
  tweet: { title, body, likes, retweets, shares },
  author,
}: {
  tweet: {
    title: string;
    body: string;
    likes: number;
    retweets: number;
    shares: number;
  };
  author: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gray-900 p-6 lg:flex-row">
      <div className="h-12 w-12 self-center rounded-full bg-white lg:self-start" />
      <div className="flex flex-1 flex-col gap-4">
        <p className="text-center lg:text-left">@{author}</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg">{body}</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex items-center gap-1">
            <AiOutlineHeart />
            {likes}
          </div>
          <div className="flex items-center gap-1">
            <PiArrowsClockwiseLight />
            {retweets}
          </div>
          <div className="flex items-center gap-1">
            <BiShare />
            {shares}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
