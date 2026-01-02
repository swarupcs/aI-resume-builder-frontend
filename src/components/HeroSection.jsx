import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 overflow-hidden'>
      {/* Background glow effect */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-glow pointer-events-none' />

      {/* Grid pattern overlay */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className='container relative mx-auto px-4 py-20 text-center'>
        {/* Badge */}
        <div
          className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8 animate-fade-up'
          style={{ animationDelay: '0.1s' }}
        >
          <Zap className='h-4 w-4 text-primary' />
          <span className='text-sm text-primary font-medium'>
            Powered by Advanced AI
          </span>
        </div>

        {/* Main headline */}
        <h1
          className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up'
          style={{ animationDelay: '0.2s' }}
        >
          Build Your Perfect Resume
          <br />
          <span className='text-gradient'>In Minutes, Not Hours</span>
        </h1>

        {/* Subheadline */}
        <p
          className='max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-up'
          style={{ animationDelay: '0.3s' }}
        >
          Let AI craft a professional, ATS-optimized resume tailored to your
          dream job. Stand out from the crowd and land more interviews.
        </p>

        {/* CTA buttons */}
        <div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up'
          style={{ animationDelay: '0.4s' }}
        >
          <Button variant='hero' size='xl'>
            Create Your Resume
            <ArrowRight className='h-5 w-5' />
          </Button>
          <Button variant='hero-outline' size='xl'>
            <Play className='h-5 w-5' />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div
          className='flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-up'
          style={{ animationDelay: '0.5s' }}
        >
          <div className='text-center'>
            <div className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              50K+
            </div>
            <div className='text-sm text-muted-foreground'>Resumes Created</div>
          </div>
          <div className='h-12 w-px bg-border hidden sm:block' />
          <div className='text-center'>
            <div className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              94%
            </div>
            <div className='text-sm text-muted-foreground'>Success Rate</div>
          </div>
          <div className='h-12 w-px bg-border hidden sm:block' />
          <div className='text-center'>
            <div className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              2 Min
            </div>
            <div className='text-sm text-muted-foreground'>Average Time</div>
          </div>
        </div>

        {/* Floating resume preview mockup */}
        <div
          className='relative mt-20 mx-auto max-w-4xl animate-fade-up'
          style={{ animationDelay: '0.6s' }}
        >
          <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl' />
          <div className='relative rounded-2xl border border-border bg-card p-2 shadow-2xl'>
            <div className='rounded-xl bg-secondary/50 p-6 sm:p-8'>
              {/* Mock resume header */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center'>
                  <span className='font-display text-xl font-bold text-primary'>
                    JD
                  </span>
                </div>
                <div className='flex-1 text-left'>
                  <div className='h-6 w-48 bg-foreground/20 rounded mb-2' />
                  <div className='h-4 w-32 bg-muted-foreground/20 rounded' />
                </div>
                <div className='hidden sm:block text-right'>
                  <div className='h-4 w-40 bg-muted-foreground/20 rounded mb-2' />
                  <div className='h-4 w-32 bg-muted-foreground/20 rounded' />
                </div>
              </div>

              {/* Mock sections */}
              <div className='space-y-4'>
                <div>
                  <div className='h-4 w-24 bg-primary/40 rounded mb-2' />
                  <div className='h-3 w-full bg-foreground/10 rounded mb-1' />
                  <div className='h-3 w-5/6 bg-foreground/10 rounded mb-1' />
                  <div className='h-3 w-4/6 bg-foreground/10 rounded' />
                </div>
                <div>
                  <div className='h-4 w-28 bg-primary/40 rounded mb-2' />
                  <div className='h-3 w-full bg-foreground/10 rounded mb-1' />
                  <div className='h-3 w-3/4 bg-foreground/10 rounded' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
