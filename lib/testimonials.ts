// lib/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  initial: string;
  quote: string;
  rating: number;
  source: 'Google' | 'Apollo 247';
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Pavan Kumar S',
    initial: 'P',
    quote: 'The staff and overall experience at Health Nest was excellent. Dr. Sanjana and her team made us feel completely at ease during what was an anxious time for our family. Highly professional and caring.',
    rating: 5,
    source: 'Apollo 247',
    service: 'Pregnancy Care',
  },
  {
    id: 2,
    name: 'Saini Chatterjee',
    initial: 'S',
    quote: 'Dr. Sanjana is absolutely calm and compassionate. She took the time to explain everything clearly and never made me feel rushed. I felt genuinely heard and cared for during every visit.',
    rating: 5,
    source: 'Apollo 247',
    service: 'Gynaecology',
  },
  {
    id: 3,
    name: 'Mega Muthamma',
    initial: 'M',
    quote: 'What sets Dr. Sanjana apart is her combination of experience, friendliness, and patience. She never dismissed my concerns and always provided thorough, reassuring answers. Truly a wonderful doctor.',
    rating: 5,
    source: 'Apollo 247',
    service: 'High-Risk Pregnancy',
  },
  {
    id: 4,
    name: 'Amaira Sadaf',
    initial: 'A',
    quote: 'Dr. Sanjana has excellent manners and is a very good gynaecologist. Her demeanour is kind and professional. I always feel comfortable discussing sensitive issues with her. 100% recommended.',
    rating: 5,
    source: 'Apollo 247',
    service: 'PCOS Treatment',
  },
  {
    id: 5,
    name: 'Bhoomika T C',
    initial: 'B',
    quote: 'She is a very good gynaecologist. The clinic at Health Nest is clean and well-maintained. Dr. Sanjana is knowledgeable and gives very practical, easy-to-follow advice. Very satisfied with my care.',
    rating: 5,
    source: 'Apollo 247',
    service: 'Menstrual Disorders',
  },
];
