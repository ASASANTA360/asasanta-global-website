import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      nin,
      documentType,
      documentNumber,
    } = body;

    // Basic verification logic
    if (!fullName || !nin) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name and NIN are required",
        },
        { status: 400 }
      );
    }

    // AI Identity Skill Simulation
    const result = {
      verified: true,
      confidenceScore: 98,
      riskLevel: "Low",
      verificationTime: new Date().toISOString(),
      details: {
        fullName,
        nin,
        documentType,
        documentNumber,
      },
    };

    return NextResponse.json({
      success: true,
      skill: "Identity Verification Skill",
      result,
    });

  } catch (error) {
    console.error("Identity Skill Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Verification failed",
      },
      { status: 500 }
    );
  }
}