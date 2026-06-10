import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      identityVerified,
      transactions,
      accountAge,
    } = body;

    let score = 50;

    // Identity check
    if (identityVerified) {
      score += 25;
    }

    // Transaction history
    if (transactions > 100) {
      score += 15;
    } else if (transactions > 20) {
      score += 10;
    }

    // Account age
    if (accountAge > 12) {
      score += 10;
    } else if (accountAge > 6) {
      score += 5;
    }

    let riskLevel = "High";

    if (score >= 85) {
      riskLevel = "Low";
    } else if (score >= 65) {
      riskLevel = "Medium";
    }

    return NextResponse.json({
      success: true,
      skill: "Trust Score Skill",
      result: {
        trustScore: score,
        riskLevel,
        recommendation:
          score >= 80
            ? "Trusted user"
            : "Additional verification required",
        generatedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error("Trust Score Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Trust score calculation failed",
      },
      { status: 500 }
    );
  }
}