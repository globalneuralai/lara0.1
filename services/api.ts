// src/service/api.ts
export interface AskResponse {
  app?: string;
  status?: string;
  message?: string;
  [key: string]: any;
}

export async function askLara(question: string): Promise<AskResponse> {
  // পছন্দমত: সরাসরি URL বসাতে পারো অথবা Vite env variable ব্যবহার করো
  // 1) Dev-time কাস্ট করুন:
  // const API_URL = "https://XXXX.execute-api.us-east-1.amazonaws.com/prod/ask";
  // 2) অথবা .env এ রাখলে import.meta.env.VITE_LARA_API_URL ব্যবহার করুন:
  const API_URL = import.meta.env.VITE_LARA_API_URL ?? "https://qn400q60f8.execute-api.us-east-1.amazonaws.com/prod";

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question,
      language: "en",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AWS API error ${res.status}: ${text}`);
  }

  const body = await res.json();

  // যদি Lambda proxy integration ব্যবহার করে থাকে তখন `body` আবার stringified JSON হিসেবে আসতে পারে
  if (body && typeof body.body === "string") {
    try {
      return JSON.parse(body.body);
    } catch (e) {
      return { message: body.body } as AskResponse;
    }
  }

  return body as AskResponse;
}
