const { NextResponse } = require("next/server");

// GET API
export const GET = () => {
  return NextResponse.json({ message: "Hello, world!" });
};

// POST API
export const POST = () => {
  return;
};

// PATCH API
export const PATCH = () => {
  return;
};

// DELETE API
export const DELETE = () => {
  return;
};
