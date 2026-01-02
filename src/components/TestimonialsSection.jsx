import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    content:
      'ResumeAI helped me land my dream job. The AI-generated bullet points perfectly highlighted my achievements in a way I never could have written myself.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager at Stripe',
    content:
      'I was skeptical at first, but the ATS optimization actually works. I went from zero callbacks to 5 interviews in one week.',
    avatar: 'MJ',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director at Shopify',
    content:
      "The templates are gorgeous and professional. I've recommended ResumeAI to everyone in my network looking to level up their career.",
    avatar: 'ER',
  },
];

const TestimonialsSection = () => {
  return (
    <section id='testimonials' className='relative py-24 sm:py-32'>
      <div className='container mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Loved by Professionals
            <br />
            <span className='text-gradient'>Worldwide</span>
          </h2>
          <p className='max-w-2xl mx-auto text-muted-foreground text-lg'>
            Join thousands of job seekers who have successfully landed their
            dream roles with ResumeAI.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className='group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300'
            >
              {/* Stars */}
              <div className='flex gap-1 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-4 w-4 fill-primary text-primary' />
                ))}
              </div>

              {/* Quote */}
              <p className='text-foreground/90 leading-relaxed mb-6'>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <span className='font-display text-sm font-semibold text-primary'>
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className='font-semibold text-foreground text-sm'>
                    {testimonial.name}
                  </div>
                  <div className='text-muted-foreground text-sm'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
