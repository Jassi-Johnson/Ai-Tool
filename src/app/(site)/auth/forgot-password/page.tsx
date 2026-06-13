// This file disables all authentication.
// You can also delete this entire folder: app/api/auth/

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).json({ error: "Authentication is disabled" });
}

// For App Router, export an empty handler:
export const GET = () => new Response("Not found", { status: 404 });
export const POST = () => new Response("Not found", { status: 404 });