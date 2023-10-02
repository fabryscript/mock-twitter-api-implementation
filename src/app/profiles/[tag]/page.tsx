import React from "react";

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "force-cache",
  });
  return res.json();
};

export default async function Tag({ params }: { params: { tag: string } }) {
  const data = await getTodos();
  return (
    <div className="">
      {JSON.stringify(data)}
      <p>{params.tag}</p>
    </div>
  );
}
