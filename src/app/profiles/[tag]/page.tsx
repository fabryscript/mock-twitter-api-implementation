import Tweet from "@/components/Tweet";
import React from "react";

const getTweets = async (handle: string) => {
  /**
   * example if we want to actually fetch tweets from twitter's api:
   *
   * @example
   * const revalidationTime = 3600
   * const response = await fetch("url", { next: revalidate: revalidationTime })
   * ...
   * @link https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation
   */
  const response = {
    [handle]: {
      tweets: [
        {
          title: "Hello there!",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore expedita dolore, provident cupiditate eos corrupti quasi asperiores sint aspernatur possimus nihil similique facilis laudantium quo incidunt suscipit dolorem eligendi?",
          likes: 392,
          retweets: 200,
          shares: 104,
        },
        {
          title: "Hello there!",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore expedita dolore, provident cupiditate eos corrupti quasi asperiores sint aspernatur possimus nihil similique facilis laudantium quo incidunt suscipit dolorem eligendi?",
          likes: 392,
          retweets: 200,
          shares: 104,
        },
        {
          title: "Hello there!",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore expedita dolore, provident cupiditate eos corrupti quasi asperiores sint aspernatur possimus nihil similique facilis laudantium quo incidunt suscipit dolorem eligendi?",
          likes: 392,
          retweets: 200,
          shares: 104,
        },
      ],
    },
  };
  return response;
};

export default async function Tag({ params }: { params: { tag: string } }) {
  const currentHandle = params.tag;
  const data = await getTweets(currentHandle);

  return (
    <div className="flex flex-col gap-4 px-6 py-6 lg:px-20">
      {data[currentHandle].tweets.map((tweet) => (
        <Tweet key={tweet.title} tweet={tweet} author={currentHandle} />
      ))}
    </div>
  );
}
