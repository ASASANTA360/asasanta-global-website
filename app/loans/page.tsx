"use client";

import { useState } from "react";

export default function LoansPage() {
  const [businessName, setBusinessName] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");

  async function applyLoan() {
    const res = await fetch("/api/loans/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessName,
        amount,
        purpose,
        duration,
      }),
    });

    const data = await res.json();

    alert(data.message || "Loan application submitted");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Smart Lending
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          AI-powered micro-lending infrastructure for African businesses and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Loan Application
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="number"
                placeholder="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="text"
                placeholder="Loan Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
              >
                <option value="">Repayment Duration</option>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>
              </select>

              <button
                onClick={applyLoan}
                className="w-full bg-white text-black py-3 rounded-xl font-semibold"
              >
                Apply for Loan
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Credit Score
              </h3>

              <p className="text-5xl font-bold text-green-400 mb-2">
                82%
              </p>

              <p className="text-gray-400">
                AI-generated financial trust score.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Active Loans
              </h3>

              <p className="text-5xl font-bold mb-2">
                3
              </p>

              <p className="text-gray-400">
                Current running loan applications.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Blockchain Transparency
              </h3>

              <p className="text-gray-400">
                Smart-contract based repayment tracking and lending records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}