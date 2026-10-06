import AddFriendButton from "@/components/AddFriendButton";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  const data = await response.json();

  console.log("Friend Details:", data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Friend Details</h1>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">Name:</span> {data.name}
          </p>

          <p>
            <span className="font-semibold">Username:</span> {data.username}
          </p>

          <p>
            <span className="font-semibold">Email:</span> {data.email}
          </p>

          <p>
            <span className="font-semibold">Phone:</span> {data.phone}
          </p>

          <p>
            <span className="font-semibold">Website:</span> {data.website}
          </p>

          <div>
            <h2 className="font-semibold mb-1">Address:</h2>

            <p>Street: {data.address.street}</p>
            <p>Suite: {data.address.suite}</p>
            <p>City: {data.address.city}</p>
            <p>Zipcode: {data.address.zipcode}</p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">Company:</h2>

            <p>Name: {data.company.name}</p>
            <p>Catch Phrase: {data.company.catchPhrase}</p>
            <p>Business: {data.company.bs}</p>
          </div>
        </div>

        <AddFriendButton friend={data} />
      </div>
    </div>
  );
};

export default page;
