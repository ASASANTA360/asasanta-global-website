import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import TrustProof from "@/models/TrustProof";

export async function GET() {
  try {
    await connectDB();

    const proofs = await TrustProof.find({})
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      totalProofs: proofs.length,
      proofs,
    });

  } catch (error: any) {

    console.error(
      "GET TRUST PROOFS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to get Trust Proofs",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
