export type MethodItem = {
  id: string;
  title: string;
  text: string;
};

export type ProgramRow = {
  stage: string;
  result: string;
};

export type BenefitItem = {
  id: string;
  title: string;
  text: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const methodItems: MethodItem[] = [
  {
    id: "01",
    title: "Sensing",
    text: "You learn to notice subtle shifts in attention and return to calm focus.",
  },
  {
    id: "02",
    title: "Attention",
    text: "You train stable concentration through short, repeatable routines.",
  },
  {
    id: "03",
    title: "Calm Narrative",
    text: "You develop a softer internal dialogue and reduce mental noise.",
  },
];

export const programRows: ProgramRow[] = [
  { stage: "Stage 01", result: "Calibration" },
  { stage: "Stage 02", result: "Architecture of Silence" },
  { stage: "Stage 03", result: "The Second Expansion" },
  { stage: "Stage 04", result: "Total Integration" },
];

export const benefitItems: BenefitItem[] = [
  {
    id: "01",
    title: "Mental Clarity",
    text: "You build a clean attention cycle with lower internal friction.",
  },
  {
    id: "02",
    title: "Emotional Resilience",
    text: "You improve reaction control and recover faster after stress.",
  },
  {
    id: "03",
    title: "Healthy Sleep",
    text: "You reduce cognitive overdrive before sleep and wake up steadier.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Is this for beginners?",
    answer: "Yes. The program starts from basic breathing and attention drills.",
  },
  {
    id: "faq-2",
    question: "How much time does it take?",
    answer: "10-20 minutes daily is enough to complete each stage.",
  },
  {
    id: "faq-3",
    question: "Is there ongoing support?",
    answer: "Yes. You get weekly check-ins and Q&A sessions.",
  },
];
