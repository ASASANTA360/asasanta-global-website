"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Notifications from "@/components/dashboard/Notifications";
import ProfileCard from "@/components/dashboard/ProfileCard";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import AuthGuard from "@/components/dashboard/AuthGuard";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";

export default function DashboardPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setReply(data.reply);

      setMessage("");
    } catch (error) {
      setReply("AI system temporarily unavailable.");
    }

    setLoading(false);
  }

  return (
    <AuthGuard>
      <main className="min-h-screen text-white flex fade-in">
        <Sidebar />

        <div className="flex-1 p-8">
          <h1 className="text-5xl font-bold mb-4">
            Asasanta Nexus Dashboard
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            AI-powered decentralized identity and financial infrastructure.
          </p>

          {/* Analytics */}
          <AnalyticsCards />

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* AI Assistant */}
            <div className="xl:col-span-2 glass glow rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-6">
                AI Assistant
              </h2>

              <div className="bg-black/50 border border-gray-800 rounded-xl p-4 h-[300px] overflow-y-auto mb-4">
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">
                      AI Assistant
                    </p>

                    <div className="bg-gray-900/70 p-3 rounded-xl w-fit max-w-md">
                      {reply || "Welcome to Asasanta Nexus AI Assistant."}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask the AI assistant..."
                  className="flex-1 bg-black/40 border border-gray-700 rounded-xl px-4 py-3 outline-none"
                />

                <button
                  onClick={sendMessage}
                  className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="glass glow rounded-2xl">
              <Notifications />
            </div>

            {/* Profile */}
            <div className="glass glow rounded-2xl">
              <ProfileCard />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-6 glass glow rounded-2xl">
            <ActivityTimeline />
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}