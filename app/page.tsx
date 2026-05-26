import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white fade-in">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block glass glow px-4 py-2 rounded-full mb-6">
              <p className="text-sm text-gray-300">
                AI • Blockchain • Financial Infrastructure
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Asasanta
              <span className="text-gray-400">
                {" "}Nexus
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Enterprise-grade AI-powered identity verification,
              decentralized finance infrastructure, smart lending,
              and blockchain-powered trust systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Launch Dashboard
              </Link>

              <Link
                href="/auth/register"
                className="glass glow px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="glass glow rounded-3xl p-8">
            <div className="space-y-6">
              <div className="bg-black/40 rounded-2xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-2">
                  AI Trust Score
                </p>

                <h2 className="text-6xl font-black text-green-400">
                  98%
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 rounded-2xl p-6 border border-gray-800">
                  <p className="text-gray-400 mb-2">
                    Verified Users
                  </p>

                  <h2 className="text-4xl font-bold">
                    8.4K
                  </h2>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-gray-800">
                  <p className="text-gray-400 mb-2">
                    Active Loans
                  </p>

                  <h2 className="text-4xl font-bold">
                    1.2K
                  </h2>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  System Status
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>

                  <p className="font-semibold">
                    All AI systems operational
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Enterprise Infrastructure
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for scalable digital identity, secure financial
            systems, and AI-powered trust architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass glow rounded-3xl p-8 hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-4">
              AI Verification
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Intelligent fraud detection, automated KYC verification,
              and AI-driven identity security systems.
            </p>
          </div>

          <div className="glass glow rounded-3xl p-8 hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-4">
              Smart Lending
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Blockchain-powered lending infrastructure and
              decentralized financial trust systems.
            </p>
          </div>

          <div className="glass glow rounded-3xl p-8 hover:scale-105 transition">
            <h2 className="text-3xl font-bold mb-4">
              Secure Infrastructure
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Enterprise-grade cybersecurity and decentralized
              identity architecture for Africa.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Trusted By Innovators
          </h2>

          <p className="text-xl text-gray-400">
            Businesses and organizations trust Asasanta Nexus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass glow rounded-3xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              “Asasanta Nexus transformed our digital verification
              process with AI automation and blockchain security.”
            </p>

            <div>
              <h3 className="font-bold text-xl">
                Nexus Agro Ventures
              </h3>

              <p className="text-gray-500">
                Agricultural Finance
              </p>
            </div>
          </div>

          <div className="glass glow rounded-3xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              “The lending infrastructure and trust scoring system
              improved our customer onboarding significantly.”
            </p>

            <div>
              <h3 className="font-bold text-xl">
                FuturePay Africa
              </h3>

              <p className="text-gray-500">
                Fintech Solutions
              </p>
            </div>
          </div>

          <div className="glass glow rounded-3xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              “One of the most futuristic AI-powered infrastructure
              platforms we have worked with.”
            </p>

            <div>
              <h3 className="font-bold text-xl">
                Digital Trust Network
              </h3>

              <p className="text-gray-500">
                Identity Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="glass glow rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            <div>
              <h2 className="text-6xl font-black mb-3">
                12K+
              </h2>

              <p className="text-gray-400">
                Platform Users
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-black mb-3">
                8.4K
              </h2>

              <p className="text-gray-400">
                Verified Identities
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-black mb-3">
                ₦2.4B
              </h2>

              <p className="text-gray-400">
                Processed Loans
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-black mb-3">
                99.9%
              </h2>

              <p className="text-gray-400">
                System Reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="glass glow rounded-3xl p-16 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready To Scale With AI?
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Join the next generation of decentralized financial
            infrastructure and AI-powered identity systems.
          </p>

          <Link
            href="/auth/register"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}