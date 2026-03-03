import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className='relative py-24 sm:py-32 overflow-hidden'>
      {/* Animated gradient background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-purple-600/10' />
        <div className='absolute inset-0 bg-mesh opacity-40' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-glow' />
      </div>

      {/* Floating orbs */}
      <div className='absolute top-10 left-20 w-48 h-48 rounded-full bg-primary/8 blur-3xl animate-float' />
      <div className='absolute bottom-10 right-20 w-64 h-64 rounded-full bg-purple-600/6 blur-3xl animate-float-slow' />

      <div className='container relative mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Card */}
          <div
            className='relative rounded-3xl border border-primary/20 overflow-hidden p-10 sm:p-16 text-center'
            style={{ background: 'oklch(from var(--primary) l c h / 0.04)' }}
          >
            {/* Gradient border */}
            <div
              className='absolute inset-0 rounded-3xl opacity-20'
              style={{
                boxShadow: '0 0 0 1px oklch(from var(--primary) l c h / 0.4)',
              }}
            />

            {/* Grid pattern inside card */}
            <div
              className='absolute inset-0 opacity-[0.03]'
              style={{
                backgroundImage:
                  'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className='relative z-10'>
              <div
                className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border'
                style={{
                  background: 'oklch(from var(--primary) l c h / 0.10)',
                  borderColor: 'oklch(from var(--primary) l c h / 0.30)',
                }}
              >
                <Sparkles className='h-3.5 w-3.5 text-primary' />
                <span className='text-sm text-primary font-medium font-display'>
                  Start Free Today — No Credit Card
                </span>
              </div>

              <h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight'>
                Ready to Build Your
                <br />
                <span className='text-gradient'>Winning Resume?</span>
              </h2>

              <p className='text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed'>
                Join 50,000+ professionals who have transformed their job search
                with AI-powered resumes. Takes less than 2 minutes.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link to='/signup'>
                  <button
                    className='group relative flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl'
                    style={{
                      background:
                        'linear-gradient(135deg, var(--primary), oklch(0.65 0.28 305))',
                      boxShadow: '0 6px 32px oklch(0.72 0.22 280 / 0.45)',
                    }}
                  >
                    <Sparkles className='h-5 w-5 transition-transform group-hover:rotate-12' />
                    Create Your Resume Free
                    <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                    <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </button>
                </Link>

                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Zap className='h-4 w-4 text-primary' />
                  Ready in under 2 minutes
                </div>
              </div>

              {/* Feature pills */}
              <div className='flex flex-wrap items-center justify-center gap-2 mt-8'>
                {[
                  '✓ Free forever plan',
                  '✓ No credit card',
                  '✓ Export to PDF',
                  '✓ 7 templates',
                ].map((item) => (
                  <span
                    key={item}
                    className='text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/60 border border-border'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
