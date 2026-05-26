import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const user = await User.findOne({
      email: body.email,
    });

    if (!user) {
      return Response.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!passwordMatch) {
      return Response.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return Response.json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Login failed",
    });
  }
}