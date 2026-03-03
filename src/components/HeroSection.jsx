import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 overflow-hidden'>
      {/* Mesh gradient background */}
      <div className='absolute inset-0 bg-mesh opacity-60' />

      {/* Animated orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none' />
      <div
        className='absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl animate-float pointer-events-none'
        style={{ animationDelay: '2s' }}
      />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-glow pointer-events-none' />

      {/* Grid pattern */}
      <div
        className='absolute inset-0 opacity-[0.025]'
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className='container relative mx-auto px-4 py-20 text-center'>
        {/* Badge */}
        <div
          className='inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8 animate-fade-up border'
          style={{
            animationDelay: '0.1s',
            background: 'oklch(from var(--primary) l c h / 0.08)',
            borderColor: 'oklch(from var(--primary) l c h / 0.25)',
          }}
        >
          <span className='flex h-2 w-2 rounded-full bg-primary pulse-dot' />
          <Zap className='h-3.5 w-3.5 text-primary' />
          <span className='text-sm text-primary font-medium font-display tracking-wide'>
            Powered by Advanced AI
          </span>
        </div>

        {/* Main headline */}
        <h1
          className='font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 animate-fade-up tracking-tight'
          style={{ animationDelay: '0.2s' }}
        >
          Build Your
          <br />
          <span className='text-gradient'>Perfect Resume</span>
          <br />
          <span className='text-foreground/80'>In Minutes.</span>
        </h1>

        {/* Subheadline */}
        <p
          className='max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-up leading-relaxed'
          style={{ animationDelay: '0.3s' }}
        >
          Let AI craft a professional, ATS-optimized resume tailored to your
          dream job. Stand out from the crowd and land more interviews.
        </p>

        {/* Social proof mini */}
        <div
          className='flex items-center justify-center gap-2 mb-10 animate-fade-up'
          style={{ animationDelay: '0.35s' }}
        >
          <div className='flex -space-x-2'>
            {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
              <div
                key={l}
                className='w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white'
                style={{
                  background: `hsl(${200 + i * 30}, 70%, 55%)`,
                  zIndex: 5 - i,
                }}
              >
                {l}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-1'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='h-3.5 w-3.5 fill-amber-400 text-amber-400'
              />
            ))}
          </div>
          <span className='text-sm text-muted-foreground'>
            Loved by{' '}
            <span className='text-foreground font-semibold'>50,000+</span>{' '}
            professionals
          </span>
        </div>

        {/* CTA buttons */}
        <div
          className='flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 animate-fade-up'
          style={{ animationDelay: '0.4s' }}
        >
          <Link to='/dashboard'>
            <button
              className='group relative flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
              style={{
                background:
                  'linear-gradient(135deg, var(--primary), oklch(0.65 0.28 305))',
                boxShadow: '0 4px 24px oklch(0.72 0.22 280 / 0.4)',
              }}
            >
              <Zap className='h-4.5 w-4.5 transition-transform group-hover:rotate-12' />
              Create Your Resume Free
              <ArrowRight className='h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5' />
              <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity' />
            </button>
          </Link>
          <button className='flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-base border border-border hover:border-primary/50 bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-200 hover:scale-[1.02]'>
            <div className='flex items-center justify-center w-6 h-6 rounded-full bg-primary/10'>
              <Play className='h-3 w-3 text-primary fill-primary' />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div
          className='flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-up mb-20'
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { value: '50K+', label: 'Resumes Created' },
            { value: '94%', label: 'Success Rate' },
            { value: '< 2 Min', label: 'Average Time' },
          ].map((stat, i) => (
            <div key={stat.label} className='text-center'>
              {i > 0 && (
                <div
                  className='hidden sm:block absolute h-10 w-px bg-border'
                  style={{ left: 0 }}
                />
              )}
              <div className='font-display text-3xl sm:text-4xl font-black text-gradient'>
                {stat.value}
              </div>
              <div className='text-sm text-muted-foreground mt-1 font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating resume mockup */}
        <div
          className='relative mx-auto max-w-4xl animate-fade-up'
          style={{ animationDelay: '0.6s' }}
        >
          {/* Glow behind */}
          <div className='absolute -inset-8 bg-gradient-to-r from-primary/15 via-purple-600/10 to-primary/15 rounded-3xl blur-3xl' />

          <div className='relative rounded-2xl border border-border bg-card p-1.5 shadow-2xl overflow-hidden'>
            {/* Browser chrome */}
            <div className='flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-secondary/40 rounded-t-xl'>
              <div className='w-2.5 h-2.5 rounded-full bg-red-400/70' />
              <div className='w-2.5 h-2.5 rounded-full bg-amber-400/70' />
              <div className='w-2.5 h-2.5 rounded-full bg-green-400/70' />
              <div className='flex-1 mx-4'>
                <div className='h-5 rounded-md bg-background/60 border border-border/50 flex items-center px-3'>
                  <span className='text-xs text-muted-foreground/60'>
                    resumeiq.swarupdas.dev/builder
                  </span>
                </div>
              </div>
            </div>

            <div className='rounded-xl bg-secondary/20 p-6 sm:p-8'>
              {/* Mock resume content */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='h-14 w-14 rounded-xl bg-gradient-to-br from-primary/30 to-purple-600/30 flex items-center justify-center border border-primary/20'>
                  <span className='font-display text-lg font-black text-primary'>
                    JD
                  </span>
                </div>
                <div className='flex-1 text-left'>
                  <div className='h-5 w-44 bg-foreground/15 rounded-lg mb-2' />
                  <div className='h-3.5 w-28 bg-primary/20 rounded-md mb-3' />
                  <div className='flex gap-2'>
                    <div className='h-3 w-28 bg-muted-foreground/15 rounded' />
                    <div className='h-3 w-20 bg-muted-foreground/15 rounded' />
                    <div className='h-3 w-24 bg-muted-foreground/15 rounded' />
                  </div>
                </div>
                <div className='hidden sm:block'>
                  <div className='px-3 py-1 rounded-full bg-green-500/15 border border-green-500/25'>
                    <span className='text-xs text-green-400 font-medium'>
                      ATS Ready ✓
                    </span>
                  </div>
                </div>
              </div>

              <div className='space-y-5'>
                {[
                  {
                    label: 'Experience',
                    w1: 'full',
                    w2: '5/6',
                    w3: '4/6',
                    accent: true,
                  },
                  {
                    label: 'Skills',
                    w1: '4/6',
                    w2: '3/6',
                    w3: '5/6',
                    accent: false,
                  },
                ].map((section) => (
                  <div key={section.label}>
                    <div className='flex items-center gap-2 mb-2'>
                      <div className='h-3.5 w-20 bg-primary/40 rounded' />
                      <div className='flex-1 h-px bg-border' />
                    </div>
                    {section.accent ? (
                      <div className='pl-3 border-l-2 border-primary/40 space-y-1.5'>
                        <div className='h-2.5 w-full bg-foreground/10 rounded' />
                        <div
                          className={`h-2.5 w-${section.w2} bg-foreground/10 rounded`}
                        />
                        <div
                          className={`h-2.5 w-${section.w3} bg-foreground/10 rounded`}
                        />
                      </div>
                    ) : (
                      <div className='flex flex-wrap gap-1.5'>
                        {[
                          'React',
                          'TypeScript',
                          'Node.js',
                          'Python',
                          'AWS',
                        ].map((s) => (
                          <div
                            key={s}
                            className='px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20'
                          >
                            <span className='text-xs text-primary/80'>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
