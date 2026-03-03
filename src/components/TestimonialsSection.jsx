import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Google',
    content:
      'ResumeAI helped me land my dream job. The AI-generated bullet points perfectly highlighted my achievements in a way I never could have written myself.',
    avatar: 'SC',
    color: 'from-blue-500 to-indigo-600',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'Stripe',
    content:
      'I was skeptical at first, but the ATS optimization actually works. I went from zero callbacks to 5 interviews in one week.',
    avatar: 'MJ',
    color: 'from-primary to-purple-600',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Shopify',
    content:
      "The templates are gorgeous and professional. I've recommended ResumeAI to everyone in my network looking to level up their career.",
    avatar: 'ER',
    color: 'from-rose-500 to-pink-600',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      className='relative py-24 sm:py-32 overflow-hidden'
    >
      <div className='absolute inset-0 bg-mesh opacity-20' />

      <div className='container relative mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div
            className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border'
            style={{
              background: 'oklch(from var(--primary) l c h / 0.06)',
              borderColor: 'oklch(from var(--primary) l c h / 0.2)',
            }}
          >
            <Star className='h-3.5 w-3.5 text-amber-400 fill-amber-400' />
            <span className='text-sm text-primary font-medium font-display'>
              Loved by Professionals
            </span>
          </div>

          <h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight'>
            Real Stories from
            <br />
            <span className='text-gradient'>Real Job Seekers</span>
          </h2>
          <p className='max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed'>
            Join thousands of job seekers who have successfully landed their
            dream roles with ResumeAI.
          </p>
        </div>

        {/* Testimonials */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto'>
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className='group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle bg gradient */}
              <div
                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  background:
                    'radial-gradient(ellipse at top left, oklch(from var(--primary) l c h / 0.04), transparent 60%)',
                }}
              />

              <div className='relative z-10'>
                {/* Stars */}
                <div className='flex gap-1 mb-5'>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className='h-8 w-8 text-primary/20 mb-3' />

                {/* Content */}
                <p className='text-foreground/80 leading-relaxed mb-6 text-sm'>
                  {t.content}
                </p>

                {/* Author */}
                <div className='flex items-center gap-3 pt-4 border-t border-border'>
                  <div
                    className={`h-10 w-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}
                  >
                    <span className='font-display text-sm font-bold text-white'>
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <div className='font-semibold text-foreground text-sm'>
                      {t.name}
                    </div>
                    <div className='text-muted-foreground text-xs'>
                      {t.role}{' '}
                      <span className='text-primary font-medium'>
                        @ {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className='mt-16 flex flex-wrap items-center justify-center gap-8 text-center'>
          {[
            { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { value: '50K+', label: 'Happy Users', icon: '🚀' },
            { value: '98%', label: 'Would Recommend', icon: '💜' },
          ].map((item) => (
            <div
              key={item.label}
              className='flex items-center gap-3 px-6 py-3 rounded-2xl bg-secondary/50 border border-border'
            >
              <span className='text-2xl'>{item.icon}</span>
              <div className='text-left'>
                <div className='font-display font-black text-foreground text-lg leading-none'>
                  {item.value}
                </div>
                <div className='text-xs text-muted-foreground mt-0.5'>
                  {item.label}
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
