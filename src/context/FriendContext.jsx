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

    const friendWithStatus = {
      ...friend,
      status: "pending",
    };

    setFriends((previousFriends) => [...previousFriends, friendWithStatus]);

    toast("Friend added successfully!");
  };

  const markAsDone = (id) => {
    setFriends((previousFriends) =>
      previousFriends.map((friend) =>
        friend.id === id ? { ...friend, status: "done" } : friend,
      ),
    );
  };

  const removeFriend = (id) => {
    setFriends((previousFriends) =>
      previousFriends.filter((friend) => friend.id !== id),
    );
  };
  return (
    <FriendContext.Provider
      value={{ friends, addFriend, markAsDone, removeFriend }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
