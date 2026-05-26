"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");

  async function registerUser() {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        phone,
        nin,
      }),
    });

    const data = await res.json();

    alert(data.message);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-gray-950 border border-gray-800 rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 mb-8">
          Join Asasanta Nexus
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="NIN Number"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={registerUser}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}