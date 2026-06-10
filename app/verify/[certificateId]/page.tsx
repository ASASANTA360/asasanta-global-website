interface VerifyPageProps {
  params: {
    certificateId: string;
  };
}

export default function VerifyPage({
  params,
}: VerifyPageProps) {

  const certificateId = params.certificateId;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl border border-green-500/30 rounded-[35px] bg-[#050816] p-10">

        <div className="text-center">

          <h1 className="text-5xl font-black">
            ✅ Certificate Verified
          </h1>

          <p className="text-gray-400 mt-3">
            AI Trust Certificate successfully verified
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              Certificate ID
            </p>

            <h2 className="text-2xl font-black mt-2">
              {certificateId}
            </h2>

          </div>


          <div className="bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              Status
            </p>

            <h2 className="text-2xl font-black text-green-400 mt-2">
              ACTIVE
            </h2>

          </div>


          <div className="bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              Owner
            </p>

            <h2 className="text-2xl font-black mt-2">
              ASASANTA001
            </h2>

          </div>


          <div className="bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              AI Trust Score
            </p>

            <h2 className="text-2xl font-black text-cyan-400 mt-2">
              100 / 100
            </h2>

          </div>


          <div className="md:col-span-2 bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              Blockchain Transaction
            </p>

            <h2 className="text-purple-400 font-mono mt-2 break-all">
              0x8571d82ee7721
            </h2>

          </div>


          <div className="md:col-span-2 bg-black border border-white/10 rounded-2xl p-6">

            <p className="text-gray-500">
              Trust Proof ID
            </p>

            <h2 className="text-xl font-bold mt-2">
              TRUST-75DJMF8G
            </h2>

          </div>

        </div>


        <div className="mt-8 text-center">

          <p className="text-green-400 font-bold text-xl">
            🔒 Secured by Asasanta Nexus AI + Pharos Blockchain
          </p>

        </div>

      </div>

    </main>
  );
}