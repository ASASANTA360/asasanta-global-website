import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { wallet } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          score: 50,
          risk: "UNKNOWN",
          analysis: "GEMINI_API_KEY not found",
          recommendations: ["Check .env.local"],
        },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
Analyze this blockchain wallet address:

${wallet}

Return ONLY valid JSON in this exact format:

{
  "score": 95,
  "risk": "LOW",
  "analysis": "Short professional analysis under 80 words.",
  "recommendations": [
    "Recommendation 1",
    "Recommendation 2",
    "Recommendation 3"
  ]
}

Rules:
- Return ONLY JSON
- No markdown
- No headings
- No bullet points
- Analysis must be under 80 words
- Recommendations must be short
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text || "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    return Response.json(result);
  } catch (error: any) {
    console.error("GEMINI ERROR:", error);

    return Response.json(
      {
        score: 50,
        risk: "UNKNOWN",
        analysis: "AI analysis failed.",
        recommendations: ["Retry analysis"],
      },
      { status: 500 }
    );
  }
}