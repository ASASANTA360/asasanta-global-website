import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userId,
      proofId,
      txHash,
      trustScore,
      decision,
    } = body;

    const certificate = {
      certificateId:
        "CERT-" +
        Math.random()
          .toString(36)
          .substring(2, 10)
          .toUpperCase(),

      owner: userId,

      trust: {
        score: trustScore,
        decision,
        level:
          trustScore >= 80
            ? "High Trust"
            : "Review Required",
      },

      blockchain: {
        proofId,
        transactionHash: txHash,
        network: "Pharos Testnet",
      },

      issuedAt: new Date().toISOString(),

      status: "Active",
    };


    return NextResponse.json({
      success: true,
      module: "Asasanta Trust Certificate",
      certificate,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Certificate creation failed",
      },
      { status: 500 }
    );
  }
}