import Link from "next/link";
import React from "react";

const AllFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((friend) => (
          <div
            key={friend.id}
            className="border rounded-lg p-5 shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{friend.name}</h2>

            <p className="text-gray-600 mb-4">{friend.email}</p>
            <Link href={`/friends/${friend.id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Go to Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
