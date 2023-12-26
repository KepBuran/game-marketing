'use client'
import React, { useState } from 'react';
import { User } from '../models/User';
import usersStore from "../stores/UsersStore";


const ProfilePage = () => {
  const user: User | null = usersStore.currentUser

  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [age, setAge] = useState(user?.age);
  const [sex, setSex] = useState(user?.sex);

  const handleSave = () => {
    const updatedUser: User = {
      ...user,
      first_name: firstName,
      last_name: lastName,
      email,
      age,
      sex,
    };
    // onSave(updatedUser);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-semibold text-2xl">Profile</h1>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="firstName" className="text-gray-700 mr-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-gray-700 mr-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-700 mr-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="text-gray-700 mr-2">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="sex" className="text-gray-700 mr-2">Sex:</label>
          <input
            type="text"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="button" onClick={handleSave} className="bg-blue-500 text-white w-1/3 m-auto px-4 py-2 rounded-md hover:bg-blue-600">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
