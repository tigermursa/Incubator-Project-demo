"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const AddedFriendPage = () => {
  const { friends, removeFriend } = useContext(FriendContext);

  const [sortOrder, setSortOrder] = useState("low");

  const handleRemoveFriend = (id) => {
    toast.success("Friend removed successfully!");
    removeFriend(id);
  };
  //   sort the friends based on the selected sort order

  const sortedFriends = [...friends].sort((a, b) => {
    if (sortOrder === "low") {
      return a.id - b.id;
    }

    return b.id - a.id;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Added Friends</h1>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="low">ID: Low → High</option>
          <option value="high">ID: High → Low</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">ID</th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Name
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Email
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Phone
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedFriends.map((friend) => (
              <tr key={friend.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">
                  {friend.id}
                </td>

                <td className="border border-gray-300 px-4 py-3">
                  {friend.name}
                </td>

                <td className="border border-gray-300 px-4 py-3">
                  {friend.email}
                </td>

                <td className="border border-gray-300 px-4 py-3">
                  {friend.phone}
                </td>

                <td className="border border-gray-300 px-4 py-3">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleRemoveFriend(friend.id)}
                  >
                    Remove Friend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedFriendPage;
