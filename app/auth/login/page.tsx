"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem(
        "asasanta-user",
        JSON.stringify(data.user)
      );

      alert("Login successful");

      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-950 border border-gray-800 rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-8">
          Login to Asasanta Nexus
        </p>

        <div className="space-y-4">
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

          <button
            onClick={loginUser}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}