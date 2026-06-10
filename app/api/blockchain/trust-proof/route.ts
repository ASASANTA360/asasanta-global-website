import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userId,
      identityStatus,
      trustScore,
      fraudScore,
      decision,
    } = body;

    // Generate Trust Proof
    const trustProof = {
      proofId:
        "TRUST-" +
        Math.random().toString(36).substring(2, 10)
          .toUpperCase(),

      userId,

      record: {
        identityStatus,
        trustScore,
        fraudScore,
        decision,
      },

      blockchain: {
        network: "Pharos Testnet",
        status: "Ready to Deploy",
      },

      createdAt: new Date().toISOString(),
    };


    return NextResponse.json({
      success: true,
      module: "Pharos Trust Proof Layer",
      trustProof,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create trust proof",
      },
      {
        status: 500,
      }
    );

  }
}