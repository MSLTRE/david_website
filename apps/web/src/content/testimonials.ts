// Placeholder content. These are sample testimonials used for layout and
// design review only. They are not real customer quotes and must be replaced
// with verified, owner-approved testimonials before launch.

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
      "Sample testimonial: the prep work was careful and the finish speaks for itself.",
    author: "Sample client",
    role: "Primary bath remodel · placeholder"
  },
  {
    id: "kitchen-backsplash",
    quote:
      "Sample testimonial: on time, on budget, and the kitchen was clean every night.",
    author: "Sample client",
    role: "Kitchen backsplash · placeholder"
  },
  {
    id: "shower",
    quote:
      "Sample testimonial: tile work was flat and the slope drained the way it should.",
    author: "Sample client",
    role: "Curbless shower · placeholder"
  }
];
