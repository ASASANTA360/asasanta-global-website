import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      network: "Casper Testnet",
      contractPackageHash:
        "contract-package-dcc0ba60b15e82e5d3cada693f5ece98cb825faa1314dd7d81dee90fad180d05",
      data: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Casper storage failed",
      },
      { status: 500 }
    );
  }
}