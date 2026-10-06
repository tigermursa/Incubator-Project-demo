"use client";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";

const ContextTest = () => {
  const { friends } = useContext(FriendContext);
  console.log("Friends from Context:", friends);
  return <div>I am a Context Test Component</div>;
};

export default ContextTest;
