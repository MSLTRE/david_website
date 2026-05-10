export type Testimonial = {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly role: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    id: "primary-bath",
    quote:
      "The prep work alone was more careful than the last two contractors we used combined. The finish speaks for itself.",
    author: "M. Alvarez",
    role: "Primary bath remodel"
  },
  {
    id: "kitchen-backsplash",
    quote:
      "On time, on budget, no surprises. Outlets lined up, cuts were tight, and the kitchen was clean every night.",
    author: "J. Park",
    role: "Kitchen backsplash"
  },
  {
    id: "shower",
    quote:
      "Curbless shower with a linear drain — slope is perfect, water goes where it should, and the tile work is dead flat.",
    author: "R. Singh",
    role: "Curbless shower"
  }
];
