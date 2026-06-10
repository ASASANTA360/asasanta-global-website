import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { proofId } = body;

    const transaction = {
      txHash:
        "0x" +
        Math.random()
          .toString(16)
          .substring(2, 18),

      proofId,

      network: "Pharos Testnet",

      status: "Confirmed",

      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      module: "Pharos Blockchain Layer",
      transaction,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Blockchain submission failed",
      },
      {
        status: 500,
      }
    );
  }
}