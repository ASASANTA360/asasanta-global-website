

"use client";



import { useState } from "react";



export default function TrustAgentPage() {

  const [form, setForm] = useState({

    firstName: "",

    surname: "",

    email: "",

    phone: "",

    nin: "",

    bvn: "",

    ninVerified: false,

    bvnVerified: false,

    phoneVerified: false,

    walletAgeDays: 0,

    transactions: 0,

  });



  const [result, setResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);



  const submit = async () => {

    try {

      setLoading(true);



      const res = await fetch("/api/trust-agent", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(form),

      });



      const data = await res.json();

      setResult(data);

    } catch (error) {

      console.error(error);

      alert("Error analyzing trust score");

    } finally {

      setLoading(false);

    }

  };



  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">

          Asasanta Trust Agent AI

        </h1>



        <p className="text-gray-400 mb-8">

          AI Powered Trust Scoring & KYC Verification

        </p>



        <div className="border border-gray-700 rounded-xl p-6">

          <div className="grid md:grid-cols-2 gap-4">

            <input

              type="text"

              placeholder="First Name"

              value={form.firstName}

              onChange={(e) =>

                setForm({ ...form, firstName: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="text"

              placeholder="Surname"

              value={form.surname}

              onChange={(e) =>

                setForm({ ...form, surname: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="email"

              placeholder="Email"

              value={form.email}

              onChange={(e) =>

                setForm({ ...form, email: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="text"

              placeholder="Phone Number"

              value={form.phone}

              onChange={(e) =>

                setForm({ ...form, phone: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="text"

              placeholder="NIN"

              value={form.nin}

              onChange={(e) =>

                setForm({ ...form, nin: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="text"

              placeholder="BVN"

              value={form.bvn}

              onChange={(e) =>

                setForm({ ...form, bvn: e.target.value })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="number"

              placeholder="Wallet Age (Days)"

              value={form.walletAgeDays}

              onChange={(e) =>

                setForm({

                  ...form,

                  walletAgeDays: Number(e.target.value),

                })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />



            <input

              type="number"

              placeholder="Transactions"

              value={form.transactions}

              onChange={(e) =>

                setForm({

                  ...form,

                  transactions: Number(e.target.value),

                })

              }

              className="p-3 rounded bg-gray-900 border border-gray-700"

            />

          </div>



          <div className="mt-6 space-y-3">

            <label className="block">

              <input

                type="checkbox"

                checked={form.ninVerified}

                onChange={(e) =>

                  setForm({

                    ...form,

                    ninVerified: e.target.checked,

                  })

                }

              />{" "}

              NIN Verified

            </label>



            <label className="block">

              <input

                type="checkbox"

                checked={form.bvnVerified}

                onChange={(e) =>

                  setForm({

                    ...form,

                    bvnVerified: e.target.checked,

                  })

                }

              />{" "}

              BVN Verified

            </label>



            <label className="block">

              <input

                type="checkbox"

                checked={form.phoneVerified}

                onChange={(e) =>

                  setForm({

                    ...form,

                    phoneVerified: e.target.checked,

                  })

                }

              />{" "}

              Phone Verified

            </label>

          </div>



          <button

            onClick={submit}

            disabled={loading}

            className="mt-6 bg-cyan-500 text-black px-6 py-3 rounded font-bold"

          >

            {loading ? "Analyzing..." : "Analyze Trust Score"}

          </button>

        </div>



        {result && (
  <div className="mt-8 border border-gray-700 rounded-xl p-6">
    <h2 className="text-2xl font-bold mb-4">
      Trust Analysis Result
    </h2>

    <p>
      Trust Score:
      <strong className="ml-2">
        {result.trustScore}
      </strong>
    </p>

    <p className="mt-2">
      AI Decision:
      <strong className="ml-2">
        {result.aiDecision}
      </strong>
    </p>

    <button
      onClick={async () => {
        try {
          const res = await fetch(
            "/api/casper/register",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                firstName: form.firstName,
                surname: form.surname,
                nin: form.nin,
                trustScore:
                  result.trustScore,
                aiDecision:
                  result.aiDecision,
              }),
            }
          );

          const data = await res.json();

          alert(
            data.success
              ? "Stored on Casper Testnet ✓"
              : "Casper storage failed"
          );
        } catch {
          alert(
            "Failed to connect to Casper"
          );
        }
      }}
      className="mt-6 bg-blue-600 px-6 py-3 rounded font-bold"
    >
      Save To Casper
    </button>
  </div>
)}

      </div>

    </main>

  );

}

 

