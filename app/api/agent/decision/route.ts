import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      identityVerified,
      confidenceScore,
      trustScore,
      fraudScore,
    } = body;

    let decision = "Rejected";
    let trustLevel = "Low";
    let recommendation = "More verification required";

    // AI Agent Decision Logic
    if (
      identityVerified &&
      confidenceScore >= 90 &&
      trustScore >= 80 &&
      fraudScore <= 20
    ) {
      decision = "Approved";
      trustLevel = "High";
      recommendation =
        "User can access trusted services";
    } 
    else if (
      identityVerified &&
      trustScore >= 60 &&
      fraudScore <= 50
    ) {
      decision = "Review Required";
      trustLevel = "Medium";
      recommendation =
        "Manual review and additional checks needed";
    }

    return NextResponse.json({
      success: true,
      agent: "Asasanta AI Trust Agent",
      result: {
        decision,
        trustLevel,
        recommendation,
        evaluatedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error("Agent Decision Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "AI Agent decision failed",
      },
      { status: 500 }
    );
  }
}