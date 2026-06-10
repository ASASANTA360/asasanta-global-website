import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Check if user already exists
    let user = await User.findOne({
      userId: "ASASANTA001",
    });

    if (!user) {
      // Create new user
      user = await User.create({
        userId: "ASASANTA001",
        name: "Salisu Ishaq",
        email: "asasantaglobaltech@gmail.com",
        walletAddress: "0xPHAROS123456",
        piUsername: "ASASANTA",
      });
    }

    return NextResponse.json({
      success: true,
      message: "MongoDB connection successful",
      user,
    });

  } catch (error: any) {

    console.error("DATABASE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}