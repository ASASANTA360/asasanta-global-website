import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Certificate from "@/models/Certificate";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const certificate = await Certificate.create({
      certificateId: body.certificateId,
      owner: body.owner,
      trustScore: body.trustScore,
      decision: body.decision,
      blockchainHash: body.blockchainHash,
      status: body.status,
    });

    return NextResponse.json({
      success: true,
      message: "Certificate saved successfully",
      certificate,
    });

  } catch (error: any) {
    console.error("CERTIFICATE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save certificate",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}