const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const generateResume = async (data) => {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
Create a professional resume:

Name: ${data.name}
Skills: ${data.skills}
Experience: ${data.experience}
            `,
          },
        ],
      }),
    });

    const result = await res.json();

    console.log("API RESPONSE:", result); // 👈 DEBUG

    // ✅ SAFE CHECK
    if (result.choices && result.choices.length > 0) {
      return result.choices[0].message.content;
    } else {
      // ❌ API fail fallback
      return `
Name: ${data.name}

Skills: ${data.skills}

Experience:
${data.experience}
      `;
    }
  } catch (error) {
    console.error("Error:", error);

    // ❌ NETWORK FAIL fallback
    return `
Name: ${data.name}

Skills: ${data.skills}

Experience:
${data.experience}
    `;
  }
};