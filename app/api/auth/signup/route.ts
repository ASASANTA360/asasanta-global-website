import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const existingUser = await User.findOne({
      email: body.email,
    });

    if (existingUser) {
      return Response.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    const user = await User.create({
      fullName: body.fullName,
      email: body.email,
      password: hashedPassword,
      phone: body.phone,
      nin: body.nin,
    });

    return Response.json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      message: "Registration failed",
    });
  }
}