const API_URL = import.meta.env.VITE_API_URL || "https://qn400q60f8.execute-api.us-east-1.amazonaws.com/prod/ask";

export async function askLara(question: string) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, language: "en" }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  const body = await res.json();
  if (body && typeof body.body === "string") {
    try { return JSON.parse(body.body); } catch { return { raw: body.body }; }
  }
  return body;
}
