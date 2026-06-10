import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      loginAttempts,
      newDevice,
      transactionAmount,
    } = body;

    let fraudScore = 0;

    // Login behavior analysis
    if (loginAttempts > 5) {
      fraudScore += 40;
    } else if (loginAttempts > 2) {
      fraudScore += 20;
    }

    // Device risk
    if (newDevice) {
      fraudScore += 30;
    }

    // Transaction amount analysis
    if (transactionAmount > 10000) {
      fraudScore += 30;
    } else if (transactionAmount > 5000) {
      fraudScore += 15;
    }

    let riskLevel = "Low";
    let action = "Approve transaction";

    if (fraudScore >= 60) {
      riskLevel = "High";
      action = "Block and request additional verification";
    } else if (fraudScore >= 30) {
      riskLevel = "Medium";
      action = "Require extra security checks";
    }

    return NextResponse.json({
      success: true,
      skill: "Fraud Detection Skill",
      result: {
        fraudScore,
        riskLevel,
        action,
        analyzedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error("Fraud Detection Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Fraud detection failed",
      },
      { status: 500 }
    );
  }
}