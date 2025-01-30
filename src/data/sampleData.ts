import { ReportType, AnalysisData } from "@/types";

export const sampleData: Record<ReportType, AnalysisData> = {
  "linkedin-post": {
    agent_id: "Linkedin_post_Analyzer",
    agent_name: "Linkedin post Analyzer",
    agent_description: "Analyzes linkedin Post for marketing research",
    user_input: {
      contents_of_companies: {
        choices: ["Apollo.io", "Amplemarket", "ZoomInfo"],
      },
    },
    stages: [
      {
        id: "stage1",
        name: "stage 1",
        description: "Analyzes linkedin Post step by step",
        template:
          "# Qualitative Analysis Template - LinkedIn Post - Stage 1\n\n...",
        steps: [
          {
            id: "step1",
            step_number: 1,
            step_name: "post Basics",
            step_description:
              "Understand the overall setup and initial impressions.",
            substeps: [
              {
                id: "substep1",
                substep_number: "1.a.",
                substep_name: "post Format Complements Content",
                description: "Does the post format complement the content?",
              },
              {
                id: "substep2",
                substep_number: "1.b.",
                substep_name: "post Format is Engaging",
                description: "Is the post format engaging?",
              },
            ],
          },
          {
            id: "step2",
            step_number: 2,
            step_name: "post Content",
            step_description: "Analyze the content of the post.",
            substeps: [
              {
                id: "substep1",
                substep_number: "2.a.",
                substep_name: "post Content is Relevant",
                description: "Is the post content relevant to the audience?",
              },
            ],
          },
        ],
      },
      {
        id: "stage2",
        name: "stage 2",
        description: "Description of stage 2",
        template:
          "# Qualitative Analysis Template - LinkedIn Post - Stage 2\n\n...",
        steps: [
          {
            id: "step1",
            step_number: 1,
            step_name: "post Basics",
            step_description:
              "Understand the overall setup and initial impressions.",
            substeps: [
              {
                id: "substep1",
                substep_number: "1.a.",
                substep_name: "post Format Complements Content",
                description: "Does the post format complement the content?",
              },
            ],
          },
        ],
      },
    ],
    final_report: "# Final Linkdedin post Report\n\n...",
  },
  "linkedin-ad": {
    agent_id: "Linkedin_Ad_Analyzer",
    agent_name: "Linkedin Ad Analyzer",
    agent_description: "Analyzes linkedin ads for marketing research",
    user_input: {
      contents_of_companies: {
        choices: [
          "Apollo.io",
          "Amplemarket",
          "Bardeen",
          "ZoomInfo",
          "Instantly.AI",
          "Cognism",
          "Lusha",
          "Gong",
          "Chorus By ZoomInfo",
          "momentum",
        ],
      },
    },
    stages: [
      {
        id: "stage1",
        name: "stage 1",
        description: "Analyzes linkedin ads step by step",
        template:
          '# Qualitative Analysis Template - LinkedIn Ads\n\n### **LinkedIn Ad Analysis Template for B2B Companies**\n\nThis template is a step-by-step guide for analyzing LinkedIn ads to uncover actionable insights. The goal is to evaluate ad effectiveness, messaging strategy, and targeting precision, providing detailed insights that a B2B marketer can leverage.\n\n---\n\n## **Step 1: Ad Basics**\n\n- **Objective**: Understand the overall setup and initial impressions.\n- **Instructions**:\n    1. **Ad Format**:\n        - Identify the format: Single Image, Carousel, Video, etc.\n        - Note how the format complements the content.\n        - Evaluate whether the format is suitable for its intended purpose (e.g., awareness, lead generation).\n    2. **Advertiser Name**:\n        - Record the company name and any associated branding cues.\n\n---\n\n## **Step 2: Headline Analysis**\n\n- **Objective**: Analyze the main hook or promise of the ad.\n- **Instructions**:\n    1. Extract the headline.\n    2. Answer the following:\n        - What key benefit or promise does the headline convey?\n        - Does it contain quantifiable results or intriguing phrasing?\n        - Is the tone aspirational, authoritative, or conversational?\n\n---\n\n## **Step 3: Body Content Analysis**\n\n- **Objective**: Dissect the messaging to identify value propositions.\n- **Instructions**:\n    1. Copy the body text.\n    2. Analyze:\n        - **Pain Points Addressed**: What problems does the ad solve?\n        - **Solutions Offered**: What benefits or transformations are promised?\n        - **Call-to-Action (CTA)**: What is the desired next step (e.g., sign up, learn more)?\n    3. Categorize the language style:\n        - Persuasive (e.g., calls to action, urgency).\n        - Educational (e.g., insights, trends, best practices).\n        - Data-driven (e.g., metrics, benchmarks).\n\n---\n\n## **Step 4: Targeting Strategy**\n\n- **Objective**: Understand the intended audience.\n- **Instructions**:\n    1. Review the **Targeting Settings** field.\n    2. Analyze:\n        - Roles or job titles targeted.\n        - Industry or company type (e.g., SaaS, enterprise, SMB).\n        - Audience segmentation by location, seniority, or specific criteria.\n\n---\n\n## **Step 5: Visual Analysis**\n\n- **Objective**: Evaluate the effectiveness of visual elements.\n- **Instructions**:\n    1. Review the image, carousel slides, or video.\n    2. Note:\n        - Key design elements: branding, icons, typography.\n        - Whether visuals align with messaging.\n        - The emotional tone conveyed (e.g., professional, friendly, aspirational).\n\n---\n\n## **Step 6: Psychological Hooks**\n\n- **Objective**: Identify strategies used to capture attention.\n- **Instructions**:\n    1. Review headline, body, and visuals together.\n    2. Highlight:\n        - Use of curiosity (e.g., "Discover", "Unlock").\n        - Authority or social proof (e.g., "Top sales teams").\n        - Urgency or exclusivity (e.g., "Limited time offer").\n\n---\n\n## **Step 7: Competitive Intelligence Themes**\n\n- **Objective**: Extract actionable insights for competitor benchmarking.\n- **Instructions**:\n    1. Summarize the ad\u2019s key themes:\n        - Sales Enablement.\n        - Industry Trends.\n        - Performance Metrics.\n        - Technology Integration.\n',
        steps: [
          {
            id: "step1",
            step_number: 1,
            step_name: "Ad Basics",
            step_description:
              "Understand the overall setup and initial impressions.",
            substeps: [
              {
                id: "substep1",
                substep_number: "1.a.",
                substep_name: "Ad Format Complements Content",
                description: "Does the ad format complement the content?",
              },
              {
                id: "substep2",
                substep_number: "1.b.",
                substep_name: "Ad Intended Purpose",
                description:
                  "Identify the intended purpose of the ad (e.g., awareness, lead generation).",
              },
              {
                id: "substep3",
                substep_number: "1.c.",
                substep_name: "Format Suitability For Purpose",
                description:
                  "Evaluate whether the format is suitable for its intended purpose.",
              },
              {
                id: "substep4",
                substep_number: "1.d.",
                substep_name: "Company Branding Cues",
                description: "Extract company-associated branding cues.",
              },
            ],
          },
          {
            id: "step2",
            step_number: 2,
            step_name: "Headline Analysis",
            step_description: "Analyze the main hook or promise of the ad.",
            substeps: [
              {
                id: "substep1",
                substep_number: "2.a.",
                substep_name: "Headline Key Benefit",
                description:
                  "Identify the key benefit or promise in the headline.",
              },
              {
                id: "substep2",
                substep_number: "2.b.",
                substep_name: "Headline Hooks",
                description:
                  "Identify standout hooks such as quantifiable results or intriguing phrasing.",
              },
              {
                id: "substep3",
                substep_number: "2.c.",
                substep_name: "Headline Tone Classification",
                description:
                  "Classify the headline tone (e.g., aspirational, authoritative, conversational).",
              },
            ],
          },
          {
            id: "step3",
            step_number: 3,
            step_name: "Body Content Analysis",
            step_description:
              "Dissect the messaging to identify value propositions.",
            substeps: [
              {
                id: "substep1",
                substep_number: "3.a.",
                substep_name: "Body Pain Points",
                description: "Identify pain points addressed in the body text.",
              },
              {
                id: "substep2",
                substep_number: "3.b.",
                substep_name: "Body Solutions",
                description: "Identify solutions or transformations promised.",
              },
              {
                id: "substep3",
                substep_number: "3.c.",
                substep_name: "Body Call To Action",
                description:
                  "Identify the call-to-action (e.g., sign up, learn more).",
              },
              {
                id: "substep4",
                substep_number: "3.d.",
                substep_name: "Body Language Style",
                description:
                  "Categorize the language style (e.g., persuasive, educational, data-driven).",
              },
            ],
          },
          {
            id: "step4",
            step_number: 4,
            step_name: "Targeting Strategy",
            step_description: "Understand the intended audience.",
            substeps: [
              {
                id: "substep1",
                substep_number: "4.a.",
                substep_name: "Target Roles Or Titles",
                description: "Analyze roles or job titles targeted.",
              },
              {
                id: "substep2",
                substep_number: "4.b.",
                substep_name: "Target Industry Type",
                description:
                  "Analyze industry or company type targeted (e.g., SaaS, enterprise, SMB).",
              },
              {
                id: "substep3",
                substep_number: "4.c.",
                substep_name: "Audience Segmentation",
                description:
                  "Analyze audience segmentation by location, seniority, or specific criteria.",
              },
            ],
          },
          {
            id: "step5",
            step_number: 5,
            step_name: "Visual Analysis",
            step_description: "Evaluate the effectiveness of visual elements.",
            substeps: [
              {
                id: "substep1",
                substep_number: "5.a.",
                substep_name: "Visual Design Elements",
                description:
                  "Identify key design elements: branding, icons, typography.",
              },
              {
                id: "substep2",
                substep_number: "5.b.",
                substep_name: "Visual Message Alignment",
                description: "Evaluate whether visuals align with messaging.",
              },
              {
                id: "substep3",
                substep_number: "5.c.",
                substep_name: "Visual Emotional Tone",
                description:
                  "Classify the emotional tone conveyed (e.g., professional, friendly, aspirational).",
              },
            ],
          },
          {
            id: "step6",
            step_number: 6,
            step_name: "Psychological Hooks",
            step_description: "Identify strategies used to capture attention.",
            substeps: [
              {
                id: "substep1",
                substep_number: "6.a.",
                substep_name: "Use Of Curiosity",
                description:
                  "Highlight use of curiosity (e.g., 'Discover', 'Unlock').",
              },
              {
                id: "substep2",
                substep_number: "6.b.",
                substep_name: "Use Of Authority",
                description:
                  "Highlight authority or social proof (e.g., 'Top sales teams').",
              },
              {
                id: "substep3",
                substep_number: "6.c.",
                substep_name: "Use Of Urgency",
                description:
                  "Highlight urgency or exclusivity (e.g., 'Limited time offer').",
              },
            ],
          },
          {
            id: "step7",
            step_number: 7,
            step_name: "Competitive Intelligence Themes",
            step_description:
              "Extract actionable insights for competitor benchmarking.",
            substeps: [
              {
                id: "substep1",
                substep_number: "7.a.",
                substep_name: "Key Themes Summary",
                description:
                  "Summarize the ad\u2019s key themes: Sales Enablement, Industry Trends, Performance Metrics, Technology Integration.",
              },
            ],
          },
        ],
      },
      {
        id: "stage2",
        name: "stage 2",
        description: "Analyzes patterns across multiple ads",
        template: "",
        steps: [],
      },
      {
        id: "stage3",
        name: "stage 3",
        description: "Generates section reports",
        template: "",
        steps: [],
      },
      {
        id: "stage4",
        name: "stage 4",
        description: "Generates final report",
        template: "",
        steps: [],
      },
    ],
    final_report: "# Final LinkedIn Ads Analysis Report\n\n...",
  },
};
