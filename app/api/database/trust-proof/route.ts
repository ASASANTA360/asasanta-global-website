import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import TrustProof from "@/models/TrustProof";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const proof = await TrustProof.create({
      proofId: body.proofId,
      userId: body.userId,
      status: body.status,
      metadata: {
        trustScore: body.trustScore,
        decision: body.decision,
        network: "Pharos Testnet",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Trust Proof saved successfully",
      proof,
    });

  } catch (error: any) {

    console.error("TRUST PROOF ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save Trust Proof",
        error: error.message,
      },
      { status: 500 }
    );
  }
}