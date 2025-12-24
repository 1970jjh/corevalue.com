
import { GoogleGenAI } from "@google/genai";
import { LandingPageStyle, UserRequirements } from "../types";
import { ADDITIONAL_FEATURES } from "../constants";

const SYSTEM_INSTRUCTION = `
You are a Senior UI/UX Engineer and Organizational Culture Specialist.
Your specialty is creating "Core Value Internalization" landing pages for corporations.
These pages are designed for employees and stakeholders to deeply understand and resonate with a company's mission, vision, and values.

Technical Requirements:
1.  **Framework:** HTML5, Tailwind CSS (via CDN), FontAwesome icons.
2.  **Font:** Strictly use 'Noto Sans KR' from Google Fonts.
3.  **Imagery:** Use 'https://picsum.photos/seed/{random}/1200/800' for placeholders but strictly include \`referrerpolicy="no-referrer"\` on all <img> tags.
4.  **Branding:** If a logoUrl or custom styles are provided, prioritize them. If a homepageUrl is provided, try to match its professional "vibe".

Design Structure:
-   **Hero:** Impactful slogan based on the Mission.
-   **Company Intro:** Professional overview.
-   **Mission & Vision:** Clear, inspiring section.
-   **Core Values:** Grid of cards with icons representing each value.
-   **Work Way (Culture):** Lifestyle or process section explaining how they work.
-   **Talent Ideal:** Descriptive section on what kind of people the company values.
-   **Guestbook Section (Crucial):** Display a "Visitor/Employee Reviews" section using the provided rating and comments. Make it look like a modern feedback wall or guestbook module.
-   **CTA:** Internal feedback form or "Join the movement" button.

Output ONLY the HTML code. No markdown formatting.
`;

export const generateLandingPage = async (
  style: LandingPageStyle,
  requirements: UserRequirements
): Promise<string> => {
  if (!process.env.API_KEY) throw new Error("API Key Missing");

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const featurePrompts = requirements.selectedFeatureIds
    .map(id => `- ${ADDITIONAL_FEATURES.find(f => f.id === id)?.promptModifier}`)
    .join('\n');

  const textPrompt = `
    **Company Name:** ${requirements.companyName}
    **Homepage URL:** ${requirements.homepageUrl || 'None'}
    **Logo URL:** ${requirements.logoUrl || 'Placeholder Needed'}
    
    **CONTENT SECTIONS:**
    - Company Intro: ${requirements.companyIntro}
    - Mission: ${requirements.missionIntro}
    - Core Values: ${requirements.coreValueIntro}
    - Work Way: ${requirements.workWayIntro}
    - Talent Ideal: ${requirements.talentIntro}
    - Guestbook Rating: ${requirements.guestbookRating}/10
    - Guestbook Comment: ${requirements.guestbookComment}
    - Other Requests: ${requirements.otherRequests}
    
    **Header Nav:** ${requirements.headerNavItems}
    **Base Design Theme:** ${style.name} (${style.description})
    **Additional Features:**
    ${featurePrompts}
    
    **Instructions:**
    1. Extract specific phrases and meaningful content from the sections provided above and the attached files.
    2. Incorporate the Guestbook Rating and Comment as a "Recent Feedback" or "Employee Voices" section in the HTML.
    3. Use the ${style.name} style for the layout, aligning colors with the company identity.
    4. Ensure the page feels like an internal corporate portal that inspires employees.
  `;

  const parts: any[] = [{ text: textPrompt }];
  
  // Collect all files
  const allFiles = [
    ...requirements.customStyleFiles,
    ...requirements.companyIntroFiles,
    ...requirements.missionIntroFiles,
    ...requirements.coreValueIntroFiles,
    ...requirements.workWayIntroFiles,
    ...requirements.talentIntroFiles,
    ...requirements.guestbookFiles,
    ...requirements.otherRequestsFiles,
    ...requirements.uploadedFiles
  ];
  
  allFiles.forEach(f => parts.push({ inlineData: { mimeType: f.mimeType, data: f.data } }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: { parts },
      config: { systemInstruction: SYSTEM_INSTRUCTION, temperature: 0.7 },
    });
    return (response.text || "").replace(/```html/g, "").replace(/```/g, "").trim();
  } catch (error) {
    throw new Error("Failed to generate content.");
  }
};
