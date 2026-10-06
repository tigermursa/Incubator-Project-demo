"use client";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const addFriend = (friend) => {
    setFriends((previousFriends) => {
      const alreadyExists = previousFriends.some(
        (item) => item.id === friend.id,
      );

      if (alreadyExists) {
        toast.error("Friend already exists!");
        return previousFriends;
      }

      return [...previousFriends, friend];
    });
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
