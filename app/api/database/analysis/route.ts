import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Analysis from "@/models/Analysis";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const analysis = await Analysis.create({
      userId: body.userId,
      identityScore: body.identityScore,
      trustScore: body.trustScore,
      fraudScore: body.fraudScore,
      decision: body.decision,
    });

    return NextResponse.json({
      success: true,
      message: "AI Analysis saved successfully",
      analysis,
    });

  } catch (error: any) {

    console.error("ANALYSIS SAVE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save analysis",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}