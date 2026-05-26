import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-900 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Asasanta Nexus
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/">
            Home
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/kyc">
            KYC
          </Link>

          <Link href="/loans">
            Loans
          </Link>

          <Link href="/admin">
            Admin
          </Link>

          <Link href="/auth/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}