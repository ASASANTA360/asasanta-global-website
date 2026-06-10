import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Analysis from "@/models/Analysis";

export async function GET() {
  try {
    await connectDB();

    const analyses = await Analysis.find({})
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      totalAnalyses: analyses.length,
      analyses,
    });

  } catch (error: any) {

    console.error(
      "GET ANALYSIS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to get AI analyses",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}