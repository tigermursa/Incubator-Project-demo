"use client";

import { useContext } from "react";
import { FriendContext } from "@/context/FriendContext";

const AddFriendButton = ({ friend }) => {
  const { addFriend } = useContext(FriendContext);

  const handleAddFriend = () => {
    const added = addFriend(friend);
  };

  return (
    <button
      onClick={handleAddFriend}
      className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add Friend
    </button>
  );
};

export default AddFriendButton;
