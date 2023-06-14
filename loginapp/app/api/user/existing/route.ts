import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req: any, res: any) => {
  const { username, password } = await req.json();
  try {
    await connectToDB();

    const user = await User.findOne({
      username: username,
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    if (user.password !== password) {
        return new Response("Incorrect password", { status: 401 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
