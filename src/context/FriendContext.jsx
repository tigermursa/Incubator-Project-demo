"use client";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const addFriend = (friend) => {
    const alreadyExists = friends.some((item) => item.id === friend.id);

    if (alreadyExists) {
      toast.error("Friend already added!");
      return;
    }

    setFriends((previousFriends) => [...previousFriends, friend]);

    toast("Friend added successfully!");
  };

  const removeFriend = (id) => {
    setFriends((previousFriends) =>
      previousFriends.filter((friend) => friend.id !== id),
    );
  };
  return (
    <FriendContext.Provider value={{ friends, addFriend, removeFriend }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
