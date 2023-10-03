import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();

  // const newPost = new Post(body);

  try {
    // await connect();

    // await newPost.save();
   console.log(body);

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
