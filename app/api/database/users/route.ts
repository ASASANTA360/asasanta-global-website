import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({})
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      totalUsers: users.length,
      users,
    });

  } catch (error: any) {

    console.error("GET USERS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to get users",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}