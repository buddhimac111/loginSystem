import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req: any, res: any) => {
  const { email, username, password } = await req.json();

  try {
    await connectToDB();

    const newUser = new User({
      email: email,
      username: username,
      password: password,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

