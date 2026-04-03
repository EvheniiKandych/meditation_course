export type MethodItem = {
  id: string;
  title: string;
  text: string;
  subTitle: string;
  boldText1: string;
  boldText2: string;
};

export type ProgramRow = {
  stage: string;
  result: string;
};

export type BenefitItem = {
  id: string;
  title: string;
  text: string;
  boldText1: string;
  boldText2: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const methodItems: MethodItem[] = [
  {
    id: "01",
    title: "Sensory Isolation",
    subTitle: "Hard cut",
    text: "Hard cut of digital and physical stimuli. We shift the brain from reactive \"ping-pong\" mode to a state of pure, clinical observation.",
    boldText1: "Hard cut",
    boldText2: "shift the brain",
  },
  {
    id: "02",
    title: "Thought\n Observation",
    subTitle: "Focus Training",
    text: "Identify the exact millisecond a thought emerges. Practice being the \"neutral witness\" — observing the mental noise without becoming it.",
    boldText1: "Identify",
    boldText2: "Practice being",
  },
  {
    id: "03",
    title: "Expansion of\n the Second",
    subTitle: "Mindful Thinking",
    text: "The core practice. Widening the vital interval between a thought and your reaction. True autonomy is born in this gap.",
    boldText1: "core practice",
    boldText2: "True autonomy",
  },
];

export const programRows: ProgramRow[] = [
  { stage: "STAGE 01", result: "CALIBRATION" },
  { stage: "STAGE 02", result: "ARCHITECTURE OF SILENCE" },
  { stage: "STAGE 03", result: "THE SECOND EXPANSION" },
  { stage: "STAGE 04", result: "TOTAL INTEGRATION" },
];

export const benefitItems: BenefitItem[] = [
  {
    id: "01",
    title: "Mental Clarity\non Demand",
    text: "Master the ability to access a state of \"pure focus\" even in high-pressure environments. No more brain fog or reactive decision-making.",
    boldText1: "",
    boldText2: "",
  },
  {
    id: "02",
    title: "Emotional\nResilience",
    text: "By widening the \"Gap,\" you gain the power to choose your response to stress rather than being a slave to your impulses.",
    boldText1: "",
    boldText2: "",
  },
  {
    id: "03",
    title: "Time\nReclamation",
    text: "Stop losing hours to digital noise. Reclaim your day by mastering your internal second and directing energy toward what truly matters.",
    boldText1: "",
    boldText2: "",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Is this for beginners?",
    answer: "Yes. Whether you have never meditated or have years of experience, the VOID protocol is a technical approach that starts from the basics.",
  },
  {
    id: "faq-2",
    question: "How much time does it take?",
    answer: "The program requires 15–20 minutes of dedicated practice per day. Precision is more important than duration.",
  },
  {
    id: "faq-3",
    question: "Is there ongoing support?",
    answer: "Stage 04 includes integration protocols to ensure the method becomes a permanent part of your life.",
  },
];
