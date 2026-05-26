"use client";

import { useState } from "react";

export default function KYCPage() {
  const [fullName, setFullName] = useState("");
  const [nin, setNin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function submitKYC() {
    const res = await fetch("/api/kyc/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        nin,
        email,
        phone,
      }),
    });

    const data = await res.json();

    alert(data.message || "KYC submitted");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          KYC Verification
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          Secure decentralized identity verification for African businesses and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Personal Information
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="text"
                placeholder="NIN Number"
                value={nin}
                onChange={(e) => setNin(e.target.value)}
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
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Upload */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Upload Documents
            </h2>

            <div className="space-y-4">
              <div className="border border-dashed border-gray-700 rounded-2xl p-8 text-center">
                <p className="text-gray-400">
                  Upload National ID / NIN Slip
                </p>
              </div>

              <div className="border border-dashed border-gray-700 rounded-2xl p-8 text-center">
                <p className="text-gray-400">
                  Upload Selfie Verification
                </p>
              </div>

              <button
                onClick={submitKYC}
                className="w-full bg-white text-black py-3 rounded-xl font-semibold"
              >
                Submit Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}