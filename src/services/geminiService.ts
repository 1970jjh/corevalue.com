
import { GoogleGenAI } from "@google/genai";
import { LandingPageStyle, UserRequirements } from "../types";
import { ADDITIONAL_FEATURES } from "../constants";

const SYSTEM_INSTRUCTION = `
You are a world-class Senior UI/UX Engineer, Brand Strategist, and Organizational Culture Specialist with 20+ years of experience.
Your specialty is creating premium "Core Value Internalization" landing pages for corporations.
These pages are designed for employees and stakeholders to deeply understand, emotionally connect with, and internalize a company's mission, vision, and values.

## CRITICAL OUTPUT REQUIREMENTS:
1. **LENGTH & COMPLETENESS:** Generate an EXTREMELY COMPREHENSIVE and LONG HTML document (minimum 2500+ lines of code). Do NOT be brief. Each section must be rich with content, visuals, and interactions.
2. **CONTENT ENRICHMENT:** If user input is brief or incomplete, YOU MUST creatively expand and enrich the content based on industry best practices. Add inspiring quotes, detailed descriptions, sub-sections, employee testimonials, timeline histories, and more.
3. **VISUAL RICHNESS:** Every section must have visual elements - icons, images, gradients, shapes, animations.

## TECHNICAL REQUIREMENTS:
1. **Framework:** HTML5, Tailwind CSS (via CDN: https://cdn.tailwindcss.com), FontAwesome 6 (via CDN).
2. **Font:** MUST use 'Noto Sans KR' from Google Fonts for ALL text.
3. **Imagery:** Use 'https://picsum.photos/seed/{descriptive-keyword}/1200/800' for images. ALWAYS include \`referrerpolicy="no-referrer"\` on ALL <img> tags.
4. **Branding:** Prioritize provided logoUrl and match homepageUrl's professional aesthetic if provided.
5. **Responsive:** Fully responsive design for mobile, tablet, and desktop.

## HERO SECTION (MANDATORY DYNAMIC BACKGROUND):
The Hero/Main section MUST have an impressive dynamic animated background. Choose ONE:
- **Animated Gradient:** Slowly shifting gradient colors using CSS animations
- **Particle Effect:** Floating particles/dots using CSS animations
- **Wave Animation:** Animated SVG waves at bottom
- **Geometric Shapes:** Floating animated geometric shapes
- **Video-like Loop:** CSS-animated patterns that create movement
Include this CSS animation in a <style> tag. The hero must be full-viewport height with centered, impactful content.

## PAGE STRUCTURE (Each section MUST have generous spacing for future content):
Create these sections with MINIMUM 300px padding-bottom for expansion room:

### 1. HEADER (Sticky)
- Logo + Navigation with smooth scroll
- Mobile hamburger menu

### 2. HERO SECTION
- Full viewport height with ANIMATED BACKGROUND
- Company name + Powerful tagline
- Inspiring mission statement
- Animated scroll indicator

### 3. COMPANY INTRODUCTION (Expanded)
- History timeline if available
- Key milestones and achievements
- Industry position and recognition
- Team size, locations, founding story
- ADD 2-3 relevant statistics/numbers even if not provided

### 4. MISSION & VISION (Detailed)
- Mission statement with icon
- Vision statement with visual
- "Why We Exist" subsection
- Future goals and aspirations
- Inspirational quote from leadership

### 5. CORE VALUES (Rich Cards)
- Each value as a detailed card with:
  - Icon (FontAwesome)
  - Title
  - Description (expand brief inputs to 2-3 sentences)
  - Real-world example of the value in action
- Use grid layout (2-3 columns)
- Hover animations on cards

### 6. WORK WAY / CULTURE
- How we collaborate
- Decision-making principles
- Communication style
- Work environment description
- Team rituals and traditions
- ADD 3-4 culture highlights even if not provided

### 7. IDEAL TALENT PROFILE
- Who thrives here
- Key competencies we value
- Growth mindset expectations
- "A day in the life" description
- Career development philosophy

### 8. EMPLOYEE VOICES / GUESTBOOK
- Display provided rating prominently (star rating visual)
- Featured testimonial/comment in quote style
- ADD 2-3 fictional but realistic employee quotes
- Modern card-based testimonial design

### 9. CALL TO ACTION
- Engaging CTA section
- "Join Our Journey" or similar
- Contact/feedback form placeholder
- Social proof elements

### 10. FOOTER
- Company info
- Quick links
- Social media icons
- Copyright

## SPACING REQUIREMENTS (CRITICAL):
- Each major section: minimum padding-y of 80px (py-20)
- Add "expansion zones" - empty div containers with min-height: 100px for future content
- Section dividers with decorative elements
- Generous margins between all elements

## ANIMATION & INTERACTIVITY:
- Smooth scroll behavior
- Fade-in animations on scroll (use CSS @keyframes)
- Hover effects on all interactive elements
- Subtle parallax effects where appropriate

## ADDITIONAL CONTENT GENERATION RULES:
- If company intro is brief: Add founding story, growth journey, industry impact
- If mission is brief: Expand with "why" and "how" explanations
- If core values are just keywords: Create full descriptions with examples
- If work way is brief: Add specific practices, rituals, principles
- If talent section is brief: Add competency framework, growth expectations

## OUTPUT FORMAT:
Output ONLY pure HTML code. No markdown. No code fences. No explanations.
The HTML must be complete and immediately usable.
Include all CSS in a <style> tag in the <head>.
Include all JavaScript in a <script> tag before </body>.
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
## COMPANY INFORMATION
**Company Name:** ${requirements.companyName}
**Homepage URL:** ${requirements.homepageUrl || 'Not provided - create professional corporate feel'}
**Logo URL:** ${requirements.logoUrl || 'Create text-based logo using company name'}

## USER-PROVIDED CONTENT (Expand and enrich ALL of these):

### Company Introduction:
${requirements.companyIntro || 'Not provided - generate compelling company story based on name and industry hints'}

### Mission Statement:
${requirements.missionIntro || 'Not provided - create inspiring mission based on company context'}

### Core Values:
${requirements.coreValueIntro || 'Not provided - generate 4-5 universal corporate values with descriptions'}

### Work Way / Culture:
${requirements.workWayIntro || 'Not provided - create modern collaborative work culture description'}

### Ideal Talent:
${requirements.talentIntro || 'Not provided - describe growth-minded, collaborative ideal employee'}

### Guestbook/Testimonial:
- Rating: ${requirements.guestbookRating}/10 (display as ${requirements.guestbookRating} stars out of 10)
- Comment: "${requirements.guestbookComment || 'Great company with amazing culture!'}"

### Additional Requests:
${requirements.otherRequests || 'None'}

## NAVIGATION STRUCTURE:
${requirements.headerNavItems}

## DESIGN THEME:
**Style:** ${style.name}
**Description:** ${style.description}
**Primary Color Mood:** ${style.mainColor || 'Professional blue'}
**Style Modifier:** ${style.promptModifier}

## SELECTED INTERACTIVE FEATURES:
${featurePrompts || 'Standard hover effects and smooth scroll'}

## CRITICAL INSTRUCTIONS:
1. Generate MINIMUM 2500 lines of HTML code
2. HERO MUST have animated/dynamic background (gradient animation, particles, or waves)
3. Each section MUST have padding-bottom: 80px minimum for future expansion
4. Add "<!-- EXPANSION ZONE -->" comments with empty containers for future content
5. EXPAND all brief user inputs into rich, detailed content
6. Add fictional but realistic employee testimonials (2-3 extra quotes)
7. Include smooth scroll, fade-in animations, hover effects
8. Make it feel like a premium corporate internal portal
9. ALL images must have referrerpolicy="no-referrer"
10. Output ONLY HTML - no markdown, no code blocks, no explanations
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
      model: "gemini-2.5-pro-preview-06-05",
      contents: { parts },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 65536
      },
    });
    return (response.text || "").replace(/```html/g, "").replace(/```/g, "").trim();
  } catch (error) {
    console.error("Generation error:", error);
    throw new Error("Failed to generate content.");
  }
};
