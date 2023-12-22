"use client";

import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title adn description are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh()
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:max-w-[1240px] max-w-[640px] m-auto  ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-4 text-xl"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-600"
          type="text "
          placeholder="Enter Title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-600"
          type="text"
          placeholder="Enter Description"
        />
        <button
          type="submit"
          className="rounded-lg bg-orange-400 w-fit p-2 hover:bg-orange-500 "
        >
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default Add;
