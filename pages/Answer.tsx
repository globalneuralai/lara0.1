import React, { useState } from "react";
import { askLara } from "../services/api";
import { Link } from "react-router-dom";

export default function Answer() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await askLara(input.trim());
      setResult(res);
    } catch (err: any) {
      setResult({ error: err.message || String(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <header className="mb-4">
        <Link to="/" className="text-emerald-700">← Home</Link>
      </header>

      <div className="max-w-lg mx-auto">
        <textarea
          className="w-full p-3 border rounded mb-2"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a question..."
        />
        <div className="flex gap-2">
          <button onClick={send} disabled={loading} className="px-4 py-2 bg-emerald-700 text-white rounded">
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        <div className="mt-4 bg-white p-3 rounded shadow">
          <pre style={{ whiteSpace: "pre-wrap" }}>{result ? JSON.stringify(result, null, 2) : "No result yet"}</pre>
        </div>
      </div>
    </div>
  );
}
