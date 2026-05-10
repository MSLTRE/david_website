export type Faq = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export const faqs: readonly Faq[] = [
  {
    id: "areas",
    question: "What areas do you serve?",
    answer:
      "We serve the greater metro area and surrounding communities. If you are unsure whether your project is in range, get in touch and we will tell you straight."
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "A standard backsplash runs one to two days. A full bathroom remodel typically runs one to two weeks depending on demolition, prep, and material lead times."
  },
  {
    id: "materials",
    question: "Do I need to buy the tile myself?",
    answer:
      "You can, or we can source it for you. We will recommend tile that fits the design, the budget, and the substrate so the install lasts."
  },
  {
    id: "warranty",
    question: "What is your warranty?",
    answer:
      "We back our workmanship with a 5-year warranty. Material warranties are provided by the manufacturer."
  },
  {
    id: "estimates",
    question: "Are estimates free?",
    answer:
      "Yes. On-site estimates are free for projects within our service area."
  },
  {
    id: "payment",
    question: "How do you handle payment?",
    answer:
      "We collect a deposit before ordering materials and the balance on completion. We accept standard payment methods."
  }
];
