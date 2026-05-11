const UPSTREAM_URL = "https://core-production-389e.up.railway.app/v1/analyze";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.MEDMCP_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server is missing MEDMCP_API_KEY" });
  }

  try {
    const upstream = await fetch(UPSTREAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(req.body ?? {}),
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", "application/json");
    return res.send(text);
  } catch {
    return res.status(502).json({
      error: "Could not reach upstream MedMCP backend",
    });
  }
}
